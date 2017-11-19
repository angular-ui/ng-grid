var fontello = require('../lib/grunt-fontello/tasks/fontello.js');

module.exports = {
  options: {
    sass: false
  },
  dist: {
    options: {
      proxy: 'http://172.16.0.250:4343',
      config  : 'grunt/font-config.json',
      fonts   : 'dist/release/fonts',
      styles  : '.tmp/fonts',
      scss    : false
      // force   : true
    }
  }
};
