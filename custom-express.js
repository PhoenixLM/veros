const express = require('express');
const consign = require('consign');

module.exports = () => {
    const app = express();
    consign()
        .include('controllers')
        .then('models')
        .into(app);

    app.use(express.static('./public'));

    app.set('view engine', 'ejs');

    return app;
}