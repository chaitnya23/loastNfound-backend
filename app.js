//----------------- imports------------------------
const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');


// initialisign env file
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./db/connection');
const router = require('./routes');



//---------------------database connection-------------------------
connectDB();


//---------------------required middlewares ----------------------
app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/',router);




app.get('/' ,(req,res)=>{

    res.send({
        status:"success",
        api:"V1_ch",
        message:"api of lost and found app of IIIT Dharwad"
    })
})



const PORT = process.env.PORT || 8080;

app.listen(8080, (error)=>{

    if(error){
        console.log("error");
    }else{

        console.log("server is listning at port 8080 ");
    }
})