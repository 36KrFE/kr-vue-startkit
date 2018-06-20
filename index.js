#!/usr/bin/env node

const fs = require('fs');
const program = require('commander');
const download = require('download-git-repo');
const handlebars = require('handlebars');
const inquirer = require('inquirer');
const execa = require('execa');
const ora = require('ora');
const chalk = require('chalk');
const symbols = require('log-symbols');
const path = require('path');
program.version('1.3.0', '-v, --version')
    .command('init <name>')
    .action((name) => {
        const root = path.join(process.cwd(), name);
        if (!fs.existsSync(root)) {
            inquirer.prompt([{
                    name: 'description',
                    message: 'Description:'
                },
                {
                    name: 'author',
                    message: 'Author:'
                }
            ]).then((answers) => {
                const spinner = ora('downloading...');
                const npminstall = ora('npminstalling...');
                const runserve = ora('runserve...');
                spinner.start();
                download('36KrFE/kr-vue-base', root, (err) => {
                    if (err) {
                        spinner.fail();
                        console.log(symbols.error, chalk.red(err));
                    } else {
                        spinner.succeed();
                        const fileName = `${root}/package.json`;
                        const meta = {
                            name,
                            description: answers.description,
                            author: answers.author
                        }
                        if (fs.existsSync(fileName)) {
                            const content = fs.readFileSync(fileName).toString();
                            const result = handlebars.compile(content)(meta);
                            fs.writeFileSync(fileName, result);
                        }
                        console.log(symbols.success, chalk.green('Created success!'));
                        npminstall.start();
                        execa.shell(`cd ${root};npm i`).then(r => {
                            npminstall.info(r.stdout);
                        }).catch(error => {
                            npminstall.fail();
                            console.log(error);
                        });
                    }
                })
            })
        } else {
            // 错误提示项目已存在，避免覆盖原有项目
            console.log(symbols.error, chalk.red('Project already exists!'));
        }
    })
program.parse(process.argv);