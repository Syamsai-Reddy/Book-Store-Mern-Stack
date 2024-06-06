const express = require("express");

const app=express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middle ware
app.use(express.json());

const blogrouters = require("./routes/allrouters")

app.use("/api/v1",blogrouters);





const dbConnect = require("./config/database")
dbConnect();

app.listen(PORT,()=>{
    console.log(`your app is running  at port no :${PORT}`);
})

app.get("/",(req,res)=>{
    res.send(`<h1>this is homepage bro</h1>`)
})