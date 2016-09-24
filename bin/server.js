#!/usr/bin/env node

const serverrunner = require('serverrunner');
const pathModule = require('path');
const args = require('yargs').argv;

const pathToConfig = args.config || pathModule.resolve(__dirname, '../', 'config/config.cjson');

serverrunner(pathToConfig);
