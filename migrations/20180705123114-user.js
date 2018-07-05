'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable('user', {
    iduser: {
      type: 'int',
      primaryKey: true
    },

    name: {
      type: 'string',
      length: 100
    },

    password: {
      type: 'string'
    },

    email: {
      type: 'string',
      length: 100
    }
  },
    callback);
};

exports.down = function (db) {
  db.droptable('user')
};

exports._meta = {
  "version": 1
};
