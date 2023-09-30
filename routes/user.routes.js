const User_ = require('../controllers/user.controller');

const UserRouter = require('express').Router();
const user = new User_();

UserRouter.put('/login',user.login );
UserRouter.post('/signup',user.signup );
UserRouter.get('/session/auth/:id',user.sessionAuth );


module.exports=UserRouter;