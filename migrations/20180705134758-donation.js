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
  db.createTable('donation',{
    iddonation:{
      type: 'int',
      primaryKey: true
    },
    stripeid:{
      type: 'int'

    },
    iduser:{
      type: 'int',
      foreignKey: true
    },
    idshelter:{
      type: 'int',
      foreignKey: true
    }
  

  }, callback)
};

exports.down = function(db) {
  return null;

  db.dropTable('donation')
};

exports._meta = {
  "version": 1
};
