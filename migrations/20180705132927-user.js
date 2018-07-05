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
    iduser:{
      type: 'int',
      primaryKey: true
    },
    name:{
        type: 'string',
        length: 45
      },
      email:{
        type: 'string',
        length: 45
      },
      password:{
        type: 'string',
        length: 45
      }
    },callback)
   
};

exports.down = function(db) {
  return null;
  db.dropTable('user')
};

exports._meta = {
  "version": 1
};
