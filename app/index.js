'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var LibraryGenerator = module.exports = function LibraryGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(LibraryGenerator, yeoman.generators.Base);

LibraryGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  cb();
  
};

LibraryGenerator.prototype.app = function app() {
  
  //Create Spec Folder
  this.mkdir('spec');
  
  this.directory('spec');
  
  //Create Sources Folders
  this.mkdir('src');
  this.mkdir('src/coffee');
  this.mkdir('src/js');
  
  this.directory('src');

};

LibraryGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('_AUTHORS', 'AUTHORS');
  this.copy('_bower.json', 'bower.json');
  this.copy('_Gruntfile.js', 'Gruntfile.js');
  this.copy('_LICENSE', 'LICENSE');
  this.copy('_package.json', 'package.json');
  this.copy('_README.md', 'README.md');
  this.copy('_SpecRunner.html', 'SpecRunner.html');
  this.copy('bowerrc', '.bowerrc');
  this.copy('editorconfig', '.editorconfig');
  this.copy('gitignore', '.gitignore');
  this.copy('jshintrc', '.jshintrc');
  this.copy('travis.yml', '.travis.yml');
};
