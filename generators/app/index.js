var Generator = require('yeoman-generator')

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts)
    this.option('babel')
  }

  method1() {
    console.log('method 1 just ran')
    console.log('this.sourceRoot()', this.sourceRoot())
    console.log('this.templatePath()', this.templatePath('index.js'))
    this.fs.copyTpl(
      this.templatePath('hello.txt'),
      this.destinationPath('public/hello.txt'),
      {title: 'John Doe'}
    )
  }

  method2() {
    console.log('method 2 just ran')
  }

}