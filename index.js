#!/usr/bin/env node

const meow = require('meow')
const chalk = require('chalk')
const clipboardy = require('./clipboardyAdapter')
const caseConvert = require('./caseConvert')
const helpString = require('./help')

const cli = meow(chalk.white(helpString), {
  flags: {
    case: {
      type: 'string',
      alias: 'c',
      isRequired: () => false
    },
  }
})

const ret = caseConvert(cli.flags.case, cli.input)

if (typeof ret === 'string') {
  clipboardy.writeSync(ret)
}
