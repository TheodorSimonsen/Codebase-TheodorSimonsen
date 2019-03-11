module.exports = function (app) {
    app.get('/', (req, res, next) => {
        res.render('page', {title: 'Welcome to this cool place'})
    })
}