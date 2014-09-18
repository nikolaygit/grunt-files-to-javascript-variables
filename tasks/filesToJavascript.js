/*
 * grunt-files-to-javascript-variables
 * https://github.com/nikolayhg/grunt-files-to-javascript-variables
 *
 * Copyright (c) 2013 Nikolay Georgiev
 * Licensed under the MIT license.
 */
'use strict';

/**
 * A task that appends all files in a given folder to JavaScript variables.
 * Every file name has a format containing the property name of the Javascript variable.
 *
 * INPUTS:
 * <inputFilesFolder>**(<inputFilePrefix>)(indexString)property.<inputFileExtension>
 * (required)            (def: '')                              (def: any extension)
 *
 * <useIndexes> : boolean (def: false)
 * <variableIndexMap> : indexString->index (def: undefined)
 *
 * if useIndexes===true and variableIndexMap===undefined
 * then etc the variableIndexMap is { '00' : 0, '01' : 1, '02' : 2, ... }
 *
 * OUTPUTS:
 * <outputBaseFile> : string (required)
 * <outputBaseFileVariable> : string (required)
 * <outputBaseFileVariableSuffix> : string (optional)
 *
 * <outputFile> : string (required) - this file will be overwritten every time the task is run!
 *    outputBaseFile
 *    outputBaseFileVariable.property or outputBaseFileVariable[index].property
 *
 * @param task - the grunt task
 * @param grunt - grunt itself
 * @constructor
 */
function FilesToJavascriptTask(task, grunt) {
    this.origTask = task;
    this.grunt = grunt;
    this.options = task.options(FilesToJavascriptTask.Defaults);
}

FilesToJavascriptTask.taskName = 'filesToJavascript';
FilesToJavascriptTask.taskDescription = 'Appends file contents to Javascript variables.';

FilesToJavascriptTask.Defaults = {
    inputFilePrefix: '',
    useIndexes: false,
    inputFileExtension: ''
};

FilesToJavascriptTask.prototype = {

    run : function () {

        this.checkOptions();
        var grunt = this.grunt;
        var options = this.options;

        // this string will contain all file contents and will be written in the output file at the end.
        var outputFileString = '';

        grunt.file.recurse(options.inputFilesFolder, function (abspath, rootdir, subdir, filename) {

            var prefixDefined = options.inputFilePrefix.length > 0;
            var fileNameStartsWithPrefix = options.inputFilePrefix.length > 0 &&
                                            filename.startsWith(options.inputFilePrefix);
            var fileExtensionDefined = options.inputFileExtension.length > 0;

            if ( (!prefixDefined || fileNameStartsWithPrefix) &&
                 (!fileExtensionDefined ||
                     (options.inputFileExtension !== undefined &&
                      filename.endsWith(options.inputFileExtension)) ) ) {

                grunt.log.debug('File : ' + abspath);

                // (<inputFilePrefix>-)(indexString-)property.<inputFileExtension>
                var fileNameWithoutPrefix = filename;
                if (options.inputFilePrefix.length > 1) {
                    fileNameWithoutPrefix = filename.substr(options.inputFilePrefix.length, filename.length);
                }

                var variableIndex = null;
                var fileNameWithoutIndexString = fileNameWithoutPrefix;
                var fileNamePropertyOnly = null;

                var shouldUseIndexes = options.useIndexes && options.variableIndexMap !== undefined;

                if (shouldUseIndexes) {
                    var indexKeys = Object.keys(options.variableIndexMap);

                    var numOfKeys = indexKeys.length;
                    for (var keyIndex = 0; keyIndex < numOfKeys; keyIndex++) {
                        var currentKey = indexKeys[keyIndex];

                        if (fileNameWithoutPrefix.startsWith(currentKey)) {
                            variableIndex = options.variableIndexMap[currentKey];

                            fileNameWithoutIndexString = fileNameWithoutIndexString.substr(currentKey.length);
                            fileNamePropertyOnly = fileNameWithoutIndexString.substr(
                                                    0, fileNameWithoutIndexString.lastIndexOf('.'));
                        }
                    }

                    if (variableIndex === null) {
                       grunt.fail.warn('No index string found in the options for the file' + abspath +
                           ' . Please add it to your options.');
                    }

                } else {
                    // if no index should be used, the the property matches the file name without the extension
                    fileNamePropertyOnly = fileNameWithoutIndexString.substr(
                                            0, fileNameWithoutIndexString.lastIndexOf('.'));
                }

                // read the file
                var inputFileString = grunt.file.read(abspath);
                // remove the new lines and escape apostrophs '
                inputFileString = inputFileString.replace(/\n/g, '').replace(/\'/g, '&apos;');

                var fullProperty = options.outputBaseFileVariable +
                    (shouldUseIndexes? '[' + variableIndex + ']' : '' ) +
                    (fileNamePropertyOnly.length > 0 ? '.' + fileNamePropertyOnly : '') +
                    (options.outputBaseFileVariableSuffix? options.outputBaseFileVariableSuffix : '');

                grunt.log.debug('File contents added to: ' + fullProperty);

                outputFileString += '\n' + fullProperty +
                    ' = \'' + inputFileString + '\';\n';
            }
        });

        var outputBaseFileString = grunt.file.read(options.outputBaseFile);
        grunt.file.write(options.outputFile, outputBaseFileString + outputFileString);
        grunt.log.debug('Saved output file: ' + options.outputFile);
    },

    checkOptions : function () {
        var grunt = this.grunt;
        var options = this.options;

        if (options.inputFilesFolder === undefined) {
            grunt.fail.warn('Missing required option "inputFilesFolder"!');
        } else if (options.outputBaseFile === undefined) {
            grunt.fail.warn('Missing required option "outputBaseFile"!');

        } else if (options.outputBaseFileVariable === undefined) {
            grunt.fail.warn('Missing required option "outputBaseFileVariable"!');

        } else if (options.outputFile === undefined) {
            grunt.fail.warn('Missing required option "outputFile"!');
        }

        if (!grunt.file.exists(options.inputFilesFolder)) {
            grunt.fail.warn('The folder in the option "inputFilesFolder" does not exist!');
        } else if (!grunt.file.exists(options.outputBaseFile)) {
            grunt.fail.warn('The file in the option "outputBaseFile" does not exist!');
        }
    }
};

module.exports = function (grunt) {
    grunt.registerMultiTask(
        FilesToJavascriptTask.taskName,
        FilesToJavascriptTask.taskDescription,
        function () {
            var task = new FilesToJavascriptTask(this, grunt);
            task.run();
        });
};

// Utils:
if (typeof String.prototype.startsWith !== 'function') {
    String.prototype.startsWith = function (str) {
        return this.slice(0, str.length) === str;
    };
}
if (typeof String.prototype.endsWith !== 'function') {
    String.prototype.endsWith = function (str) {
        return this.slice(this.length - str.length, this.length) === str;
    };
}
