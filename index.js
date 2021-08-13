#!/usr/bin/env node

import meow from 'meow';
import chalk from 'chalk';
import caseConvert from './caseConvert.js'
import helpString from './help.js'
import clipboardy from './clipboardyAdapter.js'

const cli = meow(chalk.white(helpString), {
  importMeta: import.meta,
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
