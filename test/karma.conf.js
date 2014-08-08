// Karma configuration
// Generated on Fri Nov 08 2013 09:25:16 GMT-0600 (Central Standard Time)
var util = require('../lib/grunt/utils.js');
var grunt = require('grunt');

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // frameworks to use
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser (we add more dynamically in our tasks)
    files: [
      'bower_components/jquery/jquery.min.js',
      'lib/test/jquery.simulate.js',
      
      'src/js/core/bootstrap.js',
      'src/js/**/*.js',
      'src/features/**/js/**/*.js',
      'test/unit/**/*.spec.js',
      'src/features/**/test/**/*.spec.js',

      'dist/release/ui-grid.css',

      '.tmp/template.js' //templates
    ],


    // list of files to exclude
    exclude: [
      
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress', 'coverage'],

    preprocessors: {
      // Cover source files but ignore any .spec.js files. Thanks goodness I found the pattern here: https://github.com/karma-runner/karma/pull/834#issuecomment-35626132
      'src/**/!(*.spec)+(.js)': ['coverage']
    },

    coverageReporter: {
      type: 'lcov',
      dir:  'coverage',
      subdir: '.'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    browserDisconnectTimeout: 10000,
    browserDisconnectTolerance: 2,
    browserNoActivityTimeout: 45000, // 20000,

    sauceLabs: {
      username: 'bgok',
      startConnect: false,
      testName: 'ui-grid unit tests',
    },

    // For more browsers on Sauce Labs see:
    // https://saucelabs.com/docs/platforms/webdriver
    customLaunchers: util.customLaunchers()

  });
  
  // TODO(c0bra): remove once SauceLabs supports websockets.
  // This speeds up the capturing a bit, as browsers don't even try to use websocket. -- (thanks vojta)
  if (process.env.TRAVIS) {
    config.logLevel = config.LOG_DEBUG;

    var buildLabel = 'TRAVIS #' + process.env.TRAVIS_BUILD_NUMBER + ' (' + process.env.TRAVIS_BUILD_ID + ')';
    
    config.transports = ['websocket', 'xhr-polling'];

    config.sauceLabs.build = buildLabel;
    config.sauceLabs.startConnect = false;
    config.sauceLabs.tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;

    config.transports = ['xhr-polling'];

    // Debug logging into a file, that we print out at the end of the build.
    config.loggers.push({
      type: 'file',
      filename: process.env.LOGS_DIR + '/' + ('karma.log')
    });
  }

  if (grunt.option('browsers')) {
    var bs = grunt.option('browsers').split(/,/).map(function(b) { return b.trim(); });
    config.browsers = bs;
  }
};