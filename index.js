const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const bodyparser = require('body-parser');
const app = express();


app.use(express.urlencoded({extended:false}));
app.use(express.json);



try {
 mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Database Connected");


 });
} catch (error) {
    console.log(error);
    
}


app.listen(process.env.PORT||1000);

