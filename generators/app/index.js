"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

const exec = require("child_process").exec;

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the my ${chalk.red("generator-typescript")} generator!`)
    );

    return new Promise((resolve, reject) => {
      exec("git config 'user.email'", (error, stdout) => {
        if (error) {
          return reject(error);
        }

        return resolve(stdout);
      });
    })
      .then(email => {
        const prompts = [
          {
            type: "input",
            name: "displayTitle",
            message: "your app's name",
            default: this.appname
          },
          {
            type: "input",
            name: "description",
            message: "describe your app",
            default: `An app called '${this.appname}'`
          },
          {
            type: "input",
            name: "username",
            message: "your github username"
          },
          {
            type: "input",
            name: "email",
            message: "your email address",
            default: email.trim()
          },
          {
            type: "input",
            name: "gcpProjectID",
            message: "your project ID in GCP",
            default: "todo-123"
          }
        ];

        return this.prompt(prompts);
      })
      .then(props => {
        props.title = props.displayTitle.toLowerCase().replace(/\s+/g, "-");

        this.props = props;
      });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(),
      this.props,
      {},
      { globOptions: { dot: true } }
    );
  }

  install() {
    this.yarnInstall();
  }
};
