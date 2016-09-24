#!/usr/bin/env node

var serverrunner = require('serverrunner'),
    pathModule = require('path'),
    args = require('yargs').argv;

var pathToConfig = args.config || pathModule.resolve(__dirname, '../..', 'config/config.cjson');

serverrunner(pathToConfig);
