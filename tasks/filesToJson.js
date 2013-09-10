/*
 * grunt-files-to-json-appender
 * https://github.com/sinnwerkstatt/grunt-files-to-json-appender
 *
 * Copyright (c) 2013 Nikolay Georgiev
 * Licensed under the MIT license.
 */
'use strict';

/**
 * A task that appends all files in a given folder to a JSON variable.
 * Every file name has a format containing the property name of the JSON variable.
 *
 * INPUTS:
 * <inputFilesFolder>**(<inputFilePrefix>)(indexString)property.<inputFileExtension>
 * (required)            (def: '')                              (def: any extension)
 *
 * <useIndexes> : boolean (def: false)
 * <jsonFileVariableIndexMap> : indexString->index (def: undefined)
 *
 * if useIndexes===true and jsonFileVariableIndexMap===undefined
 * then etc the jsonFileVariableIndexMap is { '00' : 0, '01' : 1, '02' : 2, ... }
 *
 * OUTPUTS:
 * <jsonBaseFile> : string (required)
 * <jsonBaseFileVariable> : string (required)
 * <jsonBaseFileVariableSuffix> : string (optional)
 *
 * <jsonFileOutput> : string (required) - this file will be overwritten every time the task is run!
 *    jsonBaseFile
 *    jsonBaseFileVariable.property or jsonBaseFileVariable[index].property
 *
 * @param task - the grunt task
 * @param grunt - grunt itself
 * @constructor
 */
function FilesToJsonAppenderTask(task, grunt) {
    this.origTask = task;
    this.grunt = grunt;
    this.options = task.options(FilesToJsonAppenderTask.Defaults);
}

FilesToJsonAppenderTask.taskName = 'filesToJson';
FilesToJsonAppenderTask.taskDescription = 'Appends file contents to JSON objects.';

FilesToJsonAppenderTask.Defaults = {
    inputFilePrefix: '',
    useIndexes: false,
    inputFileExtension: ''
};

FilesToJsonAppenderTask.prototype = {

    run : function () {

        this.checkOptions();
        var grunt = this.grunt;
        var options = this.options;

        // this string will contain all file contents and will be written in the output file at the end.
        var finalJsonFileOutputString = '';

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

                var jsonFileVariableIndex = null;
                var fileNameWithoutIndexString = fileNameWithoutPrefix;
                var fileNamePropertyOnly = null;

                grunt.log.debug('inputFilePrefix : ' + fileNameWithoutPrefix);

                var shouldUseIndexes = options.useIndexes && options.jsonFileVariableIndexMap !== undefined;

                if (shouldUseIndexes) {
                    var indexKeys = Object.keys(options.jsonFileVariableIndexMap);

                    grunt.log.debug('useIndexes');

                    var numOfKeys = indexKeys.length;
                    for (var keyIndex = 0; keyIndex < numOfKeys; keyIndex++) {
                        var currentKey = indexKeys[keyIndex];

                        if (fileNameWithoutPrefix.startsWith(currentKey)) {
                            jsonFileVariableIndex = options.jsonFileVariableIndexMap[currentKey];

                            fileNameWithoutIndexString = fileNameWithoutIndexString.substr(currentKey.length);
                            fileNamePropertyOnly = fileNameWithoutIndexString.substr(
                                                    0, fileNameWithoutIndexString.lastIndexOf('.'));

                            grunt.log.debug('found index: ' + jsonFileVariableIndex);
                            grunt.log.debug('fileNameWithoutIndexString: ' + fileNameWithoutIndexString);
                            grunt.log.debug('fileNamePropertyOnly: ' + fileNamePropertyOnly +
                                '(length='+fileNamePropertyOnly.length+')');
                        }
                    }

                    if (jsonFileVariableIndex === null) {
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

                finalJsonFileOutputString += '\n' + options.jsonBaseFileVariable +
                    (shouldUseIndexes? '[' + jsonFileVariableIndex + ']' : '' ) +
                    (fileNamePropertyOnly.length > 0 ? '.' + fileNamePropertyOnly : '') +
                    (options.jsonBaseFileVariableSuffix? options.jsonBaseFileVariableSuffix : '') +
                    ' = \'' + inputFileString + '\';\n';
            }
        });

        var jsonBaseFileString = grunt.file.read(options.jsonBaseFile);
        grunt.file.write(options.jsonFileOutput, jsonBaseFileString + finalJsonFileOutputString);
        grunt.log.debug('Saved final file: ' + options.jsonFileOutput);
    },

    checkOptions : function () {
        var grunt = this.grunt;
        var options = this.options;

        if (options.inputFilesFolder === undefined) {
            grunt.fail.warn('Missing required option "inputFilesFolder"!');
        } else if (options.jsonBaseFile === undefined) {
            grunt.fail.warn('Missing required option "jsonBaseFile"!');

        } else if (options.jsonBaseFileVariable === undefined) {
            grunt.fail.warn('Missing required option "jsonBaseFileVariable"!');

        } else if (options.jsonFileOutput === undefined) {
            grunt.fail.warn('Missing required option "jsonFileOutput"!');
        }

        if (!grunt.file.exists(options.inputFilesFolder)) {
            grunt.fail.warn('The folder in the option "inputFilesFolder" does not exist!');
        } else if (!grunt.file.exists(options.jsonBaseFile)) {
            grunt.fail.warn('The file in the option "jsonBaseFile" does not exist!');
        }
    }
};

module.exports = function (grunt) {
    grunt.registerMultiTask(
        FilesToJsonAppenderTask.taskName,
        FilesToJsonAppenderTask.taskDescription,
        function () {
            var task = new FilesToJsonAppenderTask(this, grunt);
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
