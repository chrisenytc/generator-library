/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('library generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('library:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      'spec/yourLibrarySpec.js',
      'src/coffee/yourLibrary.coffee',
      'AUTHORS',
      'bower.json',
      'Gruntfile.js',
      'LICENSE',
      'package.json',
      'README.md',
      'SpecRunner.html',
      '.bowerrc',
      '.editorconfig',
      '.gitignore',
      '.jshintrc',
      '.travis.yml'
    ];

    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });
});
