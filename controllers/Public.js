module.exports = (app) => {
    app.get('/', (req, res, next) => {
        res.render('index');
    });

    app.get('/servicos', (req, res, next) => {
        res.render('servicos');
    });

    app.get('/quem', (req, res, next) => {
        res.render('quem');
    });

    app.get('/produto', (req, res, next) => {
        res.render('produto');
    });

    app.get('/login', (req, res, next) => {
        res.render('login');
    });

    app.get('/forget-pass', (req, res, next) => {
        res.render('forget-pass');
    });

    app.get('/interesse', (req, res, next) => {
        res.render('interesse');
    });
}