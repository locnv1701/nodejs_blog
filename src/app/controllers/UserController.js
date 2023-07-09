const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');


const User = require('../models/User');
const _SECRET_KEY = 'momonkongu'

class CourseController {

    // [GET] /users
    getList(req, res, next) {
        User.getAll((error, users) => {
            if (error) {
                next(error);
            } else {
                res.json(users);
            }
        });
    }

    // [GET] /users/profile
    getUserByUsername(req, res, next) {

        User.findByUsername(req.body.username, (error, users) => {
            if (error) {
                next(error);
            } else {
                res.json(users);
            }
        });
    }

    // [POST] /users/signup
    create(req, res, next) {
        console.log(req.body);

        const formData = req.body;
        var name = formData.name;
        var username = formData.username;
        var password = formData.password;
        User.createAccount(name, username, password, (error, result) => {
            if (error) {
                next(error);
            } else {
                const token = jwt.sign({ username }, _SECRET_KEY, { expiresIn: '1h' });
                res.json({ token });
            }
        })
    }


    // [POST] /users/login
    login(req, res, next) {
        const formData = req.body;

        var username = formData.username;
        var password = formData.password;
        User.login(username, password, (error, result) => {
            if (error) {
                next(error);
            } else {
                const token = jwt.sign({ username }, _SECRET_KEY, { expiresIn: '1h' });
                res.json({ token });
            }
        });
    }

    // [PUT] /users
    updatePassword(req, res, next) {
        console.log(req.body);

        const formData = req.body;
        var name = formData.name;
        var username = formData.username;
        var password = formData.password;
        User.updatePassword(username, password, (error, result) => {
            if (error) {
                next(error);
            } else {
                res.json({
                    status: 'success',
                });
            }
        })
    }


    // [DELETE] /users/:username
    delete(req, res, next) {
        User.deleteByUsername(req.params.username, (error, result) => {
            if (error) {
                next(error);
            } else {
                res.json({
                    status: 'success',
                });
            }
        });
    }

}

module.exports = new CourseController();
