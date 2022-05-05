const chalk = require('chalk')

module.exports = {
    plugins: ['commitlint-plugin-function-rules'],
    rules: {
      'header-max-length': [0],
      'function-rules/type-enum': [
        2,
        'always',
        (parsed) => {
          if (!/(feat|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|release|workflow)/.test(parsed.type)) { 
            return [false, `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
              '不合法的 commit 消息格式',
          )}\n\n`
              + chalk.red(
                  '  请使用正确的提交格式:\n\n',
              )
              + `    ${chalk.green('feat: add \'comments\' option')}\n`
              + `    ${chalk.green('fix: handle events on blur (close #28)')}\n\n`
              + chalk.red('  请查看 git commit 提交规范：https://github.com/woai3c/Front-end-articles/blob/master/git%20commit%20style.md。\n')];
          }
          return [true];
        },
      ],
    },
  };