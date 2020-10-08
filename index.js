#!/usr/bin/env node

const meow = require('meow')
const caseConvert = require('./caseConvert')

const cli = meow(
  `
    Outline

    Usage

        $ case-cli <...args>

    Required arguments

        <required args>

        <optional argument>


    Examples


    See README.md for more details.
`,
  { }
)

const [ type, ...inputs ] = cli.input;
caseConvert(type, inputs)
