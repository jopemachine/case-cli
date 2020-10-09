#!/usr/bin/env node
const chalk = require('chalk')
const Case = require('case')
const helpString = require('./help')

module.exports = (type, ...srcs) => {
  let printResult = ''

  const src = srcs.join(' ')
  const writeLog = (log, color) => {
    console.log(color(log))
    printResult = log
  }

  switch (type) {
    case 'u':
    case 'upper':
      writeLog(Case.upper(src), chalk.yellow)
      break
    case 'l':
    case 'lower':
      writeLog(Case.lower(src), chalk.yellow)
      break
    case 's':
    case 'snake':
      writeLog(Case.snake(src), chalk.yellow)
      break
    case 'k':
    case 'kebab':
      writeLog(Case.kebab(src), chalk.yellow)
      break
    case 'h':
    case 'header':
      writeLog(Case.header(src), chalk.yellow)
      break
    case 'c':
    case 'constant':
      writeLog(Case.constant(src), chalk.yellow)
      break
    case 'p':
    case 'pascal':
      writeLog(Case.pascal(src), chalk.yellow)
      break
    case 'r':
    case 'random':
      writeLog(Case.random(src), chalk.yellow)
      break
    case 't':
    case 'title':
      writeLog(Case.title(src), chalk.yellow)
      break
    case 'sen':
    case 'sentence':
      writeLog(Case.sentence(src), chalk.yellow)
      break
    default:
      writeLog(helpString, chalk.white)
      break
  }

  return printResult
}
