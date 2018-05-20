const User = require('../../models/User');

module.exports = (app) => {
    app.post('/user/add', (req, res, next) => {
        var user = new User(req.body);
        user.save((err) => {
            if(err) return next(err);
            res.json(user);
        });
    });
}