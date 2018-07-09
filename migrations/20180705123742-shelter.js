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
  db.createTable('shelter', {
    idshelter: {
      type: 'int',
      primaryKey: true
    },

    name: {
      type: 'string',
      length: 100
    },

    address: {
      type: "string",
      length: 100
    },

    description: {
      type: "string",
      length: 100
    },

    amazonid: {
      type: "string",
    }

  }, callback);

  exports.down = function (db) {
    db.droptable('shelter')
  };

  exports._meta = {
    "version": 1
  }
};
