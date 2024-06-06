// app create
const express = require("express");
const app=express();

//we have to find the port from .env file
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//we have to add middleware to the server
app.use(express.json()); 
const fileupload = require("express-fileupload");
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));


//connect with db
const db = require("./config/database")
db.connect();

//we have to connect with cloudinary 
const cloudinary = require("./config/cloudinary")
cloudinary.cloudinaryConnect();

//we have to mount the app route
const Upload = require("./routes/FilePaths");
app.use('/api/v1/upload',Upload);

//we have to activate the server

app.listen(PORT , ()=>{
    console.log(`app is running at port no : ${PORT}`)
})