const mongoose = require('mongoose');
const config   = require('config');

const _DBHOST = config.get('Mongo.host');
const _DBPORT = config.get('Mongo.port');
const _DB     = config.get('Mongo.db');

mongoose.connect('mongodb://' + _DBHOST + ':' + _DBPORT + '/' + _DB, (err) => {
  if (err) throw new Error('Cant connect to Mongodb server');
  else console.log('Mongo %s connected @ %s : %s', _DB, _DBHOST, _DBPORT);
});

module.exports = mongoose;