#!/usr/bin/env node

const meow = require('meow')
const caseConvert = require('./caseConvert')
const chalk = require('chalk')

const cli = meow(
  chalk.white(`
    Outline

        String case utility for converting

    Usage

        case-cli [option] input
    
    Examples

        case-cli snake hello, world!
        >> hello_world

        case-cli pascal hello, world!
        >> HelloWorld

        case-cli s hello, world!
        >> hello_world
`), {})

const [type, ...inputs] = cli.input
caseConvert(type, inputs)
