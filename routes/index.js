const FeedBackRouter = require('./feedback.routes');
const FoundObjRouter = require('./foundobjects.routes');
const LostObjRouter = require('./lostobjects.routes');
const UserRouter = require('./user.routes');

const router = require('express').Router();

router.use('/api/user' ,UserRouter);
router.use('/api/found-obj', FoundObjRouter);
router.use('/api/lost-obj', LostObjRouter);
router.use('/api/feedback', FeedBackRouter);

module.exports = router;