export default class Xxx {

  static defaults = {
    opts1: '',
    opts2: '',
    opts3: '',
    cwd: process.cwd(),
  };

  constructor(options) {
    this.options = { ...Xxx.defaults, ...options };
  }

  apply(compiler) {
    compiler.plugin('emit', (compilation, callback) => {
      const opts = this.options;
      // …… your code

      callback();
    });
  }
}