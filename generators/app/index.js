"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

var fs = require("fs");
var path = require("path");

function forEachFile(directoryName, callback) {
  fs.readdir(directoryName, function(e, files) {
    if (e) {
      throw new Error(e);
    }

    files.forEach(function(file) {
      var fullPath = path.join(directoryName, file);

      fs.stat(fullPath, function(e, f) {
        if (e) {
          throw new Error(e);
        }

        if (f.isDirectory()) {
          forEachFile(fullPath);
        } else {
          callback(fullPath);
        }
      });
    });
  });
};

module.exports = class extends Generator {
  copyTemplate = filename => {
    this.fs.copyTpl(
      this.templatePath(path.join(this.sourceRoot(), filename)),
      this.destinationPath(path.join(this.destinationRoot(), filename)),
      this.props
    );
  };

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the my ${chalk.red("generator-typescript")} generator!`)
    );

    const prompts = [
      {
        type: "input",
        name: "displayTitle",
        message: "your app's name"
      },
      {
        type: "input",
        name: "description",
        message: "describe your app"
      },
      {
        type: "input",
        name: "username",
        message: "your github username"
      },
      {
        type: "input",
        name: "email",
        message: "your github email"
      },
      {
        type: "input",
        name: "gcpProjectID",
        message: "your project ID in GCP"
      }
    ];

    return this.prompt(prompts).then(props => {
      props.title = props.displayTitle.toLowerCase().replace(/\s+/g, "-");

      this.props = props;
    });
  }

  writing() {
    forEachFile(this.sourceRoot(), this.copyTemplate);
  }

  install() {
    this.installDependencies();
  }
};
