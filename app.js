const app    = require('./custom-express')();
const http   = require('http').Server(app);
const config = require('config');

const _HOST = config.get('Server.host');
const _PORT = config.get('Server.port');

const server = http.listen(_PORT, _HOST, () => {
    console.log('Server running @ %s : %s', _HOST, _PORT)
})