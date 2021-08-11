const clipboardy = require('clipboardy')

// clipboardy fails in headless environment (https://github.com/jopemachine/case-cli/issues/1)
// This adapter handle this error
module.exports = {
  readSync: (str) => {
    try {
      return clipboardy.readSync(str);
    } catch (err) {
      throw new Error('Clipboard feature is not supported in headless environment');
    }
  },

  writeSync: (str) => {
    try {
      clipboardy.writeSync(str);
    } catch (err) {
      // do nothing
    }
  },
}