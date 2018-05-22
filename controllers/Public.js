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
    })
}