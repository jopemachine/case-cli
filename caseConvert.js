#!/usr/bin/env node
const chalk = require('chalk')
const Case = require('case')
const Conf = require('conf');
const logSymbol = require('log-symbols');
const helpString = require('./help')

const config = new Conf();

module.exports = (type, ...srcs) => {
  let printResult = ''

  const src = srcs.join(' ')

  const writeLog = (log, color) => {
    console.log(color(logSymbol.success + ' ' + log))
    printResult = log
  }

  if (type === 'set') {
    config.set('default-case', srcs[0]);
    writeLog(`Default case is set by '${srcs[0]}'`, chalk.whiteBright);
    return;
  }

  switch (type) {
    case 'u':
    case 'upper':
      writeLog(Case.upper(src), chalk.whiteBright)
      break

    case 'l':
    case 'lower':
      writeLog(Case.lower(src), chalk.whiteBright)
      break

    case 's':
    case 'snake':
      writeLog(Case.snake(src), chalk.whiteBright)
      break

    case 'k':
    case 'kebab':
      writeLog(Case.kebab(src), chalk.whiteBright)
      break

    case 'h':
    case 'header':
      writeLog(Case.header(src), chalk.whiteBright)
      break

    case 'c':
    case 'camel':
      writeLog(Case.camel(src), chalk.whiteBright)
      break
    case 'constant':
      writeLog(Case.constant(src), chalk.whiteBright)
      break

    case 'p':
    case 'pascal':
      writeLog(Case.pascal(src), chalk.whiteBright)
      break

    case 'r':
    case 'random':
      writeLog(Case.random(src), chalk.whiteBright)
      break

    case 't':
    case 'title':
      writeLog(Case.title(src), chalk.whiteBright)
      break

    case 'sentence':
      writeLog(Case.sentence(src), chalk.whiteBright)
      break

    default: {
      if (config.has('default-case')) {
        const target = srcs ? type + ' ' + srcs : type;
        writeLog(Case[config.get('default-case')](target), chalk.whiteBright)
      } else {
        console.log(chalk.whiteBright(helpString));
      }
      break
    }
  }

  return printResult
}
