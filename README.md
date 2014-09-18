# grunt-files-to-javascript-variables

> Reads the contents of JSON/HTML/Other files and appends them as variables in Javascript files. Supports simple and advanced appending.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-files-to-javascript-variables --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-files-to-javascript-variables');
```

## The "filesToJavascript" task

### Explanation
If you need to build Javascript variables from (a lot of) files (e.g. HTML files) you can use this task.
The tasks reads the files as strings and appends them to a defined property of a Javascript variable.


You need to specify the folder of your files to be searched recursively.
The file names have the format:

    (<inputFilePrefix>)(indexString)property.<inputFileExtension>

You can specify your file prefix or file extension.
The property part of the file name will be used as the Javascript property of the given Javascript object.
The variable of your Javascript object can be access either by simply refering to it, or by index (if it is an array).
In case of index access, you should enable the 'useIndexes' option and define the 'variableIndexMap'.
See the example in the source code for more information.


### Configuration
In your project's Gruntfile, add a section named `filesToJavascript` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  filesToJavascript: {
      default_options: {
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
            outputFile : 'test/data/gwoe-indicators-data.js'
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

#### options.inputFileExtension
Type: `String`
Default value: any file extension

If you add a file extension, then only these files will be appended.

#### options.useIndexes
Type: `boolean`
Default value: `false`

Whether to add the Javascript property to an array index.
If set to 'true' you should specify also the 'variableIndexMap' property.

#### options.variableIndexMap
Type: `String`
Default value: `undefined`

A map of key and values.
The key is the part of the file name.
The value is the index to which the Javascript variable will be added.
See the configuration above for an example.

#### options.outputBaseFile
Type: `String`
Required

The path to the Javascript base file.
The base file should contain the 'outputBaseFileVariable' to which the properties will be added.

#### options.outputBaseFileVariable
Type: `String`
Required

The variable in the 'outputBaseFile' to which the properties will be added.

#### options.outputBaseFileVariableSuffix
Type: `String`
Default Value: ``

You can define a suffix for the Javascript variable.
For example if you have as variable 'indicators', useIndexes is true and the suffix is '.content',
then the file contents will be added to the Javascript property 'indicators[index].<propertyNameFromFileName>.content'.

#### options.outputFile
Type: `String`
Required

The Javascript output file containing the base file plus the added Javascript properties.
This file will be overwritten every time the task is run and should not be edited manually!


### Usage Examples
See the source code. Clone and run 'grunt --debug'


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality.
Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* 0.1.9 - renamed task to filesToJavascript.
* 0.1.8 - improved debug statements and commit of templates.
* 0.1.7 - removed unneeded debugging statements.
* 0.1.6 - added support for configuration without indexes. See the 'createJSTemplates' grunt configuration
 and test/templates.
* 0.1.5 - fixed fileNamePropertyOnly bug.
* 0.1.4 - added a new option outputBaseFileVariableSuffix.
* 0.1.3 - renamed task to filesToJson.
* 0.1.1 - updated README and GitHub repository.
* 0.1.0 - initial commit.
