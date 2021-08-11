#!/usr/bin/env node
const chalk = require('chalk')
const Case = require('case')
const Conf = require('conf');
const logSymbol = require('log-symbols')
const clipboardy = require('./clipboardyAdapter')
const helpString = require('./help')

const config = new Conf();

module.exports = (type, srcs) => {
  let printResult = ''

  let src = srcs.join(' ')

  if (!src) {
    try {
      src = clipboardy.readSync()
    } catch (err) {
      console.error(`${logSymbol.error} ${err.message}`);
      process.exit(1);
    }
  }

  const writeLog = (applyColor) => (log) => {
    console.log(applyColor(`${logSymbol.success} ${log}`))
    printResult = log
  }

  const writeWhiteLog = writeLog(chalk.whiteBright)

  if (srcs[0] === 'set') {
    config.set('default-case', srcs[1])
    writeLog(`Default case is set by '${srcs[1]}'`, chalk.whiteBright)
    return
  }

  switch (type) {
    case 'u':
    case 'upper':
      writeWhiteLog(Case.upper(src))
      break

    case 'l':
    case 'lower':
      writeWhiteLog(Case.lower(src))
      break

    case 's':
    case 'snake':
      writeWhiteLog(Case.snake(src))
      break

    case 'k':
    case 'kebab':
      writeWhiteLog(Case.kebab(src))
      break

    case 'h':
    case 'header':
      writeWhiteLog(Case.header(src))
      break

    case 'c':
    case 'camel':
      writeWhiteLog(Case.camel(src))
      break

    case 'p':
    case 'pascal':
      writeWhiteLog(Case.pascal(src))
      break

    case 'r':
    case 'random':
      writeWhiteLog(Case.random(src))
      break

    case 't':
    case 'title':
      writeWhiteLog(Case.title(src))
      break

    case 'constant':
      writeWhiteLog(Case.constant(src))
      break

    case 'sentence':
      writeWhiteLog(Case.sentence(src))
      break

    default: {
      if (config.has('default-case')) {
        writeWhiteLog(Case[config.get('default-case')](src))
      } else {
        console.log(chalk.whiteBright(helpString))
      }
      break
    }
  }

  return printResult
}
