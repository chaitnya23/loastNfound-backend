const FeedBack_ = require('../controllers/feedback.controller');

const FeedBackRouter = require('express').Router();
const FeedBack = new FeedBack_();

FeedBackRouter.post('/add',FeedBack.add );
FeedBackRouter.get('/get',FeedBack.get );

module.exports=FeedBackRouter;