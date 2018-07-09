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
  db.createTable('donation', {
    iddonation: {
      type: 'int',
      primaryKey: true
    },
    stripeid: {
      type: 'string',
      length: 100
    },
    iduser: {
      type: "int"
    },
    idshelter: {
      type: "int"
    }
  }, callback);

  exports.down = function (db) {
    db.droptable('dontation')
  };

  exports._meta = {
    "version": 1
  };
}
