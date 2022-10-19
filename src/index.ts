/**
 * @file This is the entrypoint for your project.
 * If used as a node module, when someone runs
 * `import stuff from 'your-module'` (typescript)
 * or `const stuff = require('your-module')` (javascript)
 * whatever is exported here is what they'll get.
 * For small projects you could put all your code right in this file.
 */
import chalk from 'chalk';
export default class Logger {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  log(message: any) {
    console.log(message);
  }

  warningColor = chalk.hex('#F5A623');
  warningStyle = chalk.underline;
  successColor = chalk.hex('#29ff89');
  successStyle = chalk.bold;
  errorColor = chalk.red;
  errorStyle = chalk.bold.underline;
  dataColor = chalk.hex('#f4017e');

  error(message: any, title: string) {
    this.log(
      `${this.errorColor(
        `[${this.errorStyle(
          title && title.length > 0 ? title.toUpperCase() : `ERROR`,
        )}]`,
      )}: ${message}`,
    );
  }
  warn(message: any, title: string) {
    this.log(
      `${this.warningColor(
        `[${this.warningStyle(
          title && title.length > 0 ? title.toUpperCase() : `WARN`,
        )}]`,
      )}: ${message}`,
    );
  }

  success(message: any, title: string) {
    this.log(
      `${this.successColor(
        `[${this.successStyle(
          title && title.length > 0 ? title.toUpperCase() : `SUCCESS`,
        )}]`,
      )}: ${message}`,
    );
  }
  data(message: any, title: string) {
    this.log(
      `${this.dataColor(
        `[${title && title.length > 0 ? title.toUpperCase() : `DATA`}]`,
      )}: ${message}`,
    );
  }
}
