const newsRouter = require('./news')
const siteRouter = require('./site')
const coursesRouter = require('./courses')
const meRouter = require('./me')
const userRouter = require('./user')

function route(app) {

    app.use('/news', newsRouter)
    app.use('/me', meRouter)
    app.use('/courses', coursesRouter)
    app.use('/users', userRouter)
    app.use('/', siteRouter)

    app.get('/hello', function (req, res) {
        res.send('Hello world')
    })

    // Middleware xử lý lỗi
    app.use((err, req, res, next) => {
        // console.error(err.stack);
        res.status(500).json({
            error: 'Đã xảy ra lỗi ở đâu đó ?!',
            message: err.message,
        });
    });

}

module.exports = route;