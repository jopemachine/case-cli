#!/usr/bin/env node
const chalk = require("chalk");
const Case = require("case");

module.exports = (type, ...srcs) => {
  const src = srcs.join(' ');
  const writeLog = (log, color) => console.log(color(log));

  switch (type) {
    case "u":
    case "upper":
      writeLog(Case.upper(src), chalk.yellow);
      break;
    case "l":
    case "lower":
      writeLog(Case.lower(src), chalk.yellow);
      break;
    case "s":
    case "snake":
      writeLog(Case.snake(src), chalk.yellow);
      break;
    case "k":
    case "kebab":
      writeLog(Case.kebab(src), chalk.yellow);
      break;
    case "h":
    case "header":
      writeLog(Case.header(src), chalk.yellow);
      break;
    case "c":
    case "constant":
      writeLog(Case.constant(src), chalk.yellow);
      break;
  }
};
