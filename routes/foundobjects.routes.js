const FoundObj_ = require('../controllers/foundobjects.controller');

const FoundObjRouter = require('express').Router();
const FoundObj = new FoundObj_();

FoundObjRouter.post('/create',FoundObj.create );
FoundObjRouter.get('/:id',FoundObj.get );
FoundObjRouter.get('/get/all',FoundObj.getAll);
FoundObjRouter.get('/search/:searchTerm',FoundObj.search);



module.exports=FoundObjRouter;