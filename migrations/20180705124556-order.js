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

  db.createTable('order', {
    idorder: {
      type: 'int',
      primaryKey: true
    },

    date: {
      type: 'date',
    },

    iduser: {
      type: 'int',
    },

    idshelter: {
      type: 'int',
    },

    amazonid: {
      type: 'string',
      lenght: 100
    }
  }, callback);

  exports.down = function (db) {
    db.droptable('order')
  };

  exports._meta = {
    "version": 1
  };
}
