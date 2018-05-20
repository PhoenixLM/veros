const User = require('../../models/User');

module.exports = (app) => {
    app.put('/user/update', (req, res, next) => {
        User.findById(req.body.id, (err, user) => {
            if(err) return next(err);
            user.set(req.body);
            user.save((err, updatedUser) => {
                if(err) return next(err);
                res.json(updatedUser);
            })
        })
    });
}