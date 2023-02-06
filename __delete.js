"use strict";
// import logger from 'logger'
//
// logger.info('hello world')
exports.__esModule = true;
var features_1 = require("features");
var id = features_1.ID.make();
console.log(id);
var us = features_1.makeSchema.object({
    name: features_1.makeSchema.string()
});
var User = features_1.makeSchema.object({
    username: features_1.makeSchema.string()
});
var _result = User.parse({ username: "Ludwig" });
console.log(_result);
