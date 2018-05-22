const User = require('../models/User');

module.exports = (app) => {

    // API 

    app.get('/consultor&:id&:email', (req, res, next) => {
        var query = {role: 1};
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

    app.post('/consultor', (req, res, next) => {
        user = new User({
            email: req.body.email,
            password: req.body.password,
            role: 1
        });
        user.save((err, user) => {
            if(err) return next(err);
            res.json(user)
        });
    });

    app.put('/consultor', (req, res, next) => {
        var query = {role: 1};
        query._id = req.body._id;
        User.findOne(query, (err, user) => {
            if(err) return next(err);
            if(!user) res.json({error: 'Not found'}); 
            user.set(req.body);
            user.save((err, updatedUser) => {
                if(err) return next(err);
                res.json(updatedUser);
            })
        });
    });

    app.delete('/consultor', (req, res, next) => {
        var query = {role: 1};
        query._id = req.body._id;
        User.deleteOne(query, (err) => {
            if(err) return next(err);
            res.json({dropped: req.body._id});
        });
    });

    // Views

    app.get('/consultor/clientes', (req, res, next) => {
        res.render('Consultor/clientes');
    });

    app.get('/consultor/painel', (req, res, next) => {
        res.render('Consultor/painel');
    });

    app.get('/consultor/new/user', (req, res, next) => {
        res.render('Consultor/user-form');
    });
}