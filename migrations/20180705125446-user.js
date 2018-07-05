'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return null;

  db.createTable('user',{
    idshelter:{
      type: 'int',
      primaryKey: true
    },
    name: {
      type: 'string',
      length:45
    },
    address: {
      type: 'string',
      length: 200
    },
    description: {
      type: 'string',
      length: 200
    },
    amazonid: {
      type: 'int',
      primaryKey: true
    }
  }, callback)
};

exports.down = function(db) {
  return null;
  db.dropTable('shelter')
};

exports._meta = {
  "version": 1
};
