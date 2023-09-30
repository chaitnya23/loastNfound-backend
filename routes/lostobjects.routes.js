const LostObj_ = require('../controllers/lostobjects.controller');

const LostObjRouter = require('express').Router();
const LostObj = new LostObj_();

LostObjRouter.post('/create',LostObj.create );
LostObjRouter.get('/:id',LostObj.get );
LostObjRouter.get('/search/:searchTerm',LostObj.search);
LostObjRouter.get('/get/all',LostObj.getAll);
LostObjRouter.post('/mark/claimed', LostObj.markAsClaimed);
LostObjRouter.post('/mark/claimed', LostObj.markAsClaimed);
LostObjRouter.post('/search', LostObj.search);






module.exports=LostObjRouter;