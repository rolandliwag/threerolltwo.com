#!/usr/bin/env node

var serverrunner = require('serverrunner'),
    pathModule = require('path');

serverrunner(pathModule.resolve(__dirname, '../..', 'config/config.cjson'));
