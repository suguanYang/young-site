const inquirer = require("inquirer")
const { spawn } = require("child_process")

const APP_TYPES = require("./fe_builder/configs/appTypesAndPath")

const APP_TYPES_ARRAY = Object.values(APP_TYPES).map(app => app)

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
    choices: APP_TYPES_ARRAY,
    validate(answer) {
      if (answer.length < 1) {
        return "You must choose at least one project"
      }
      return true
    },
  },
]

function commandCreator(appTypes, env) {
  const apps = `--appTypes=${appTypes} `
  const mode = `NODE_ENV=${env} `
  const compiling = env === "development"
    ? "yarn build-dev "
    : "yarn build-pro "

  return  mode + compiling + apps
}

inquirer
  .prompt(questions)
  .then(answers => {
    const appTypes = answers.types.reduce((curr, prev) => `${curr},${prev}`)
    const cmd = commandCreator(appTypes, answers.development ? "development" : "production")
    spawn(cmd, {
      shell: true,
      stdio: "inherit",
    })
  })

