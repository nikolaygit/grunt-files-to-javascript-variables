# grunt-files-to-json-appender

> Reads HTML code of the matrix and adds it to a JSON file

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-files-to-json-appender --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-files-to-json-appender');
```

## The "files_to_json" task

### Explanation
If you need to build JSON data from (a lot of) files (e.g. HTML files) you can use this task.
The tasks reads the files as strings and appends them to a defined property of a JSON object.


You need to specify the folder of your files to be searched recursively.
The file names have the format:

    (<inputFilePrefix>)(indexString)property.<inputFileExtension>

You can specify your file prefix or file extension.
The property part of the file name will be used as the JSON property of the given JSON object.
The variable of your JSON object can be access either by simply refering to it, or by index (if it is an array).
In case of index access, you should enable the 'useIndexes' option and define the 'jsonFileVariableIndexMap'.
See the example in the source code for more information.


### Configuration
In your project's Gruntfile, add a section named `files_to_json` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  files_to_json: {
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
  },
})
```

### Options

#### options.inputFilesFolder
Type: `String`
Required

The folder containing recursively all the files to be appended.

#### options.inputFilePrefix
Type: `String`
Default value: ``

If the files have prefix, you can set it.

#### options.useIndexes
Type: `boolean`
Default value: `false`

Whether to add the JSON property to an array index.
If set to 'true' you should specify also the 'jsonFileVariableIndexMap' property.

#### options.jsonFileVariableIndexMap
Type: `String`
Default value: `undefined`

A map of key and values.
The key is the part of the file name.
The value is the index to which the JSON property will be added.
See the configuration above for an example.

#### options.jsonBaseFile
Type: `String`
Required

The path to the JSON base file.
The base file should contain the 'jsonBaseFileVariable' to which the properties will be added.

#### options.jsonBaseFileVariable
Type: `String`
Required

The variable in the 'jsonBaseFile' to which the properties will be added.

#### options.jsonFileOutput
Type: `String`
Required

The JSON output file containing the base file plus the added JSON properties.
This file will be overwritten every time the task is run and should not be edited manually!


### Usage Examples
See the source code. Clone and run 'grunt --debug'


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality.
Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* 0.1.0 - initial commit.
