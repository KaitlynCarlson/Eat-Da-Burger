"use strict";

const orm = require("../config/orm");
const burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  createOne: function(cols, vals, cb) {
    orm.createOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  dropData: function(cb) {
    orm.dropData(function(res) {
      cb(res);
    });
  }
};
module.exports = burger;
