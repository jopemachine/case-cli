#!/usr/bin/env node

const meow = require('meow')
const caseConvert = require('./caseConvert')
const chalk = require('chalk')
const helpString = require('./help')

const cli = meow(chalk.white(helpString), {})

const [type, ...inputs] = cli.input
caseConvert(type, inputs)
