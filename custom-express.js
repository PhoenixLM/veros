const express    = require('express');
const consign    = require('consign');
const bodyParser = require('body-parser');

module.exports = () => {
    const app = express();

    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());

    app.set('view engine', 'ejs');

    consign()
        .include('controllers')
        .into(app);
    return app;
}