const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    imageUrl:{
        type:String
    },
    tags:{
        type:String,
    },
    email:{
        type:String,
    },
})


//post middleware

fileSchema.post("save",async function(doc){
    try{
        console.log("DOC",doc);

        //transporter 

        let transporter = nodemailer.createTransport({
            host : process.env.MAIL_HOST,    // means  which mail server we are using 
            auth:{
                user:process.env.MAIL_USER,
                password:process.env.MAIL_PASSWORD,
            }
        })

        // send mail code 

        let info = await transporter.sendMail({
            from:`sai project`,
            to:doc.email,
            subject:"New File Uploaded on Cloudinary",
            html:`<h2> Hello User</h2> <p>File Uploded  view here :<a href = "${doc.imageUrl}">${doc.imageUrl}</a></p>`
        })

        console.log("INFO " ,info.subject);
    }  
    catch(error){
        console.error(error.message);
    }
})

const File = mongoose.model("File" , fileSchema);

module.exports  = File;