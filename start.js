const inquirer = require("inquirer");
const { spawn, } = require("child_process");

const APP_TYPES = require("./fe_builder/configs/appTypesConfig");

const questions = [
  {
    type: "confirm",
    name: "development",
    message: "use development mode?",
    default: true,
  },
  {
    type: "checkbox",
    name: "types",
    message: "select apps",
    choices: APP_TYPES,
    validate(answer) {
      if (answer.length < 1) {
        return "You must choose at least one project";
      }
      return true;
    },
  },
];

function commandCreator(appTypes, env) {
  const compiler = "node ./fe_builder/index.js "
  const compilerConfig = "./fe_builder/webpack.config.js ";
  const apps = `--appTypes=${appTypes} `;
  const mode = `NODE_ENV=${env} `;

  return  mode + compiler + compilerConfig + apps;
}

inquirer
  .prompt(questions)
  .then(answers => {
    const appTypes = answers.types.reduce((curr, prev) => `${curr},${prev}`);
    const cmd = commandCreator(appTypes, answers.development ? "development" : "production");
    console.info('cmd: ', cmd);
    spawn(cmd, {
      shell: true,
      stdio: "inherit",
    })
  });