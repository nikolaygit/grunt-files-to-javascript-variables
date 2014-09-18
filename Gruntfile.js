/*
 * grunt-files-to-javascript-variables
 * https://github.com/nikolayhg/grunt-files-to-javascript-variables
 *
 * Copyright (c) 2013 Nikolay Georgiev
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    filesToJavascript: {

        createJSTemplates: {
            options: {
                inputFilesFolder : 'test/templates',
                inputFileExtension : 'html',
                outputBaseFile : 'test/templates/templates-base.js',
                outputBaseFileVariable : 'Template',
                outputFile : 'test/templates/templates.js'
            }
        },
        i18n: {
            options: {
                inputFilesFolder : 'test/i18n/data',
                inputFileExtension : 'json',
                shouldMinify: true,
                outputBaseFile : 'test/i18n/i18n-base.js',
                outputFile : 'test/i18n/i18n.js',
                outputBaseFileVariable : 'resources'
            }
        },
        indicators: {
            options: {
                inputFilesFolder : 'test/data/matrix',
                inputFilePrefix : 'indicator-',
                useIndexes : true,
                variableIndexMap : {
                    'a1-' : 0,
                    'b1-' : 1,
                    'c1-' : 2,
                    'c2-' : 3,
                    'c3-' : 4
                },
                outputBaseFile : 'test/data/gwoe-indicators-data-base.js',
                outputBaseFileVariable : 'indicators',
                outputBaseFileVariableSuffix : '.content',
                outputFile : 'test/data/gwoe-indicators-data.js'
            }
        },
        negativeCriteria: {
            options: {
                inputFilesFolder : 'test/data/matrix/N',
                inputFilePrefix : 'negative-indicator-',
                useIndexes : true,
                variableIndexMap : {
                    'n1' : 0,
                    'n2' : 1,
                    'n3' : 2,
                    'n4' : 3,
                    'n5' : 4
                },
                outputBaseFile : 'test/data/gwoe-indicators-data.js',
                outputBaseFileVariable : 'negativeCriteria',
                outputBaseFileVariableSuffix : '.content',
                outputFile : 'test/data/gwoe-indicators-data.js'
            }
        }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'filesToJavascript']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
