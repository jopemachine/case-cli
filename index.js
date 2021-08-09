#!/usr/bin/env node

const meow = require('meow')
const chalk = require('chalk')
const clipboardy = require('clipboardy')
const caseConvert = require('./caseConvert')
const helpString = require('./help')

const cli = meow(chalk.white(helpString), {})

const [type, ...inputs] = cli.input

clipboardy.writeSync(caseConvert(type, inputs))
