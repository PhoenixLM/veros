const User = require('../models/User');

module.exports = (app) => {
    
    // API

    app.get('/user&:id&:email', (req, res, next) => {
        var query = {role: 0};
        if(req.params.id !== 'all') {
            query._id = req.params.id;
        }
        if(req.params.email !== 'all') {
            query.email = req.params.email;
        }
        User.find(query, (err, users) => {
            if(err) return next(err);
            res.json(users);
        });
    });

    app.post('/user', (req, res, next) => {
        user = new User({
            email: req.body.email,
            password: req.body.password,
            role: 0
        });
        user.save((err, user) => {
            if(err) return next(err);
            res.json(user)
        });
    });

    app.put('/user', (req, res, next) => {
        var query = {role: 0};
        query._id = req.body._id;
        User.findOne(query, (err, user) => {
            if(err) return next(err);
            if(!user) {res.json({error: 'Not found'});} 
            user.set(req.body);
            user.save((err, updatedUser) => {
                if(err) return next(err);
                res.json(updatedUser);
            })
        });
    });

    app.delete('/user', (req, res, next) => {
        var query = {role: 0};
        query._id = req.body._id;
        User.deleteOne(query, (err) => {
            if(err) return next(err);
            res.json({dropped: req.body._id});
        });
    });

    // Views

    app.get('/user/arquivo', (req, res, next) => {
        res.render('User/arquivo');
    });

    app.get('/user/pagamento', (req, res, next) => {
        res.render('User/pagamento');
    });

    app.get('/user/painel', (req, res, next) => {
        res.render('User/painel');
    });
}