const User = require('../../models/User');

module.exports = (app) => {
    app.post('/user/query', (req, res, next) => {
        User.find(req.body, (err, users) => {
            if(err) return next(err);
            res.send(users);
        })
    })
}