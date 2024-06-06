const express = require("express");
const app = express();

//load from config file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// midleware to parse json request body 
app.use(express.json());

//import routes from todo app

const todoRoutes = require("./routes/todos") ;
//mount todo apis routes

app.use("/api/v1",todoRoutes);

//server start

app.listen(PORT , ()=>{
    console.log(`Server starts at port:${PORT}`);
})

const dbConnect = require("./config/database");
dbConnect();

//default Router

app.get("/",(req,res)=>{
    res.send(`<h1>this is the homepage</h1>`)
})
