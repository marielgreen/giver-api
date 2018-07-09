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

  db.addForeignKey('order', 'user', 'order_user_fk', //where want info, where info from, key name
    { 'iduser': 'iduser' }, //column from, column to
    {
      onDelete: 'CASCADE',
      onUpdate: 'RESTRICT'
    }, callback)

  db.addForeignKey('order', 'shelter', 'order_shelter_fk',
    { 'idshelter': 'idshelter' },
    {
      onDelete: 'CASCADE',
      onUpdate: 'RESTRICT'
    }, callback)

  db.addForeignKey('order', 'shelter', 'order_shelter_fk',
    { 'amazonid': 'amazonid' },
    {
      onDelete: 'CASCADE',
      onUpdate: 'RESTRICT'
    }, callback)

  db.addForeignKey('donation', 'user', 'donation_user_fk',
    { 'iduser': 'iduser' },
    {
      onDelete: 'CASCADE',
      onUpdate: 'RESTRICT'
    }, callback)

  db.addForeignKey('donation', 'shelter', 'donation_shelter_fk',
    { 'idshelter': 'idshelter' },
    {
      onDelete: 'CASCADE',
      onUpdate: 'RESTRICT'
    }, callback)

};

exports.down = function (db) {
  db.removeForeignKey; //?????
};

exports._meta = {
  "version": 1
};
