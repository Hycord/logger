/**
 * @file This is the entrypoint for your project.
 * If used as a node module, when someone runs
 * `import stuff from 'your-module'` (typescript)
 * or `const stuff = require('your-module')` (javascript)
 * whatever is exported here is what they'll get.
 * For small projects you could put all your code right in this file.
 */
import chalk, { Chalk } from 'chalk';
export default class Logger {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  log(
    [color = chalk.reset, style = chalk.reset]: Chalk[],
    title = 'LOG',
    message: string,
  ) {
    if (title.toLowerCase() === 'date') title = new Date().toLocaleString();
    console.log(`${color('[' + style(title) + ']')} ${message}`);
  }

  error(message: string, title = 'error') {
    this.log([chalk.hex('#ff1a1a'), chalk.bold.underline], title, message);
  }

  warn(message: string, title = 'warn') {
    this.log([chalk.hex('#F5A623'), chalk.underline], title, message);
  }

  success(message: string, title = 'success') {
    this.log([chalk.hex('#29ff89'), chalk.bold], title, message);
  }

  data(message: string, title = 'data') {
    this.log([chalk.hex('#f4017e')], title, message);
  }
}
