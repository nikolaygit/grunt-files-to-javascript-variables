/*
 * grunt-files-to-json-appender
 * https://github.com/sinnwerkstatt/grunt-files-to-json-appender
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
    filesToJson: {
      default_options: {
        options: {
            inputFilesFolder : 'test/data/matrix',
            inputFilePrefix : 'indicator-',
            useIndexes : true,
            jsonFileVariableIndexMap : {
                'a1-' : 0,
                'b1-' : 1,
                'c1-' : 2,
                'c2-' : 3,
                'c3-' : 4
            },
            jsonBaseFile : 'test/data/gwoe-indicators-data-partial.js',
            jsonBaseFileVariable : 'indicators',
            jsonFileOutput : 'test/data/gwoe-indicators-data.js'
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
  grunt.registerTask('test', ['clean', 'filesToJson']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
