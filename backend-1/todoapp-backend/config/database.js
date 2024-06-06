const mongoose = require("mongoose");

require("dotenv").config();

const dbConnection = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>console.log("DB connection iss sucessful"))
    .catch((error)=>{
        console.log("Issue in DB Connection ");
        console.error(error.message);
        process.exit(1);
    })
}

module.exports=dbConnection;

