const User = require('../../models/User');

module.exports = (app) => {
    app.post('/user/remove', (req, res, next) => {
        var id = req.body.id;
        User.deleteOne({_id: id}, (err) => {
            if (err) return next(err);
            res.json({droped: id});
        })
    })
}