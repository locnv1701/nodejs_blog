const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController');
const jwtMiddleware = require('../routes/jwt');

router.get('/', userController.getList);

router.post('/signup', userController.create)
router.post('/login', userController.login)

router.delete('/:username', userController.delete)
router.put('/', userController.updatePassword)

const authRouter = express.Router();
authRouter.use(jwtMiddleware);
authRouter.get('/profile', userController.getUserByUsername);

router.use(authRouter);


module.exports = router;