const File = require("../models/file")
const cloudinary = require("cloudinary").v2

//local file uploader function 

exports.localFileUpload = async(req,res)=>{
    try{
        //taking file from body || fetch file 
        const file = req.files.file;
        console.log("file aagaye -> " ,file);

       //create a unique path for storing the file in the server

        let path = __dirname + "/files/" +Date.now() + `.${file.name.split('.')[1]}`;

        //store this file in path by using mv fun

        file.mv(path , (error)=>{
            console.log(error);
        })
        res.json({
            success:true,
            message:"Local file uploaded successfully",
        })

    }
    catch(error){
        console.log(error);
    }
}

function isFilesupported(type,supportedTypes){
    return supportedTypes.includes(type);
}

async function uplodefiletocloudinary(file,folder,quality){
    const options = {folder};
   
    if(quality){
        options.quality=quality;
    }
    options.resource_type ="auto";
    return await cloudinary.uploader.upload(file.tempFilePath,options); 
}

// handler for image uplode 
 
exports.imageUplode = async(req,res)=>{
    try{

        // fetch data 
        const {name ,tags , email} = req.body;
        console.log(name , tags , email);
        //fetch data from body
        const file=req.files.imageFile;
        console.log(file); 

        //vaildtion
        const supportedTypes = ["jpg" ,"jpeg", "png"];

        const fileType = file.name.split(".")[1].toLowerCase();

        if(!isFilesupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,

                message:"File formet Not Supported",
            })
        }

        // if file formet is supported then uplode file on cloudinary

        const response  = await uplodefiletocloudinary(file,"first file");

        //uplode file on databases

        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url
        });

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:"Image Successfully Uploaded",
        })

    }
    catch(error){
        console.error(error);
        res.status(400).json({
            success:false,
            message:"Something went Wrong",
        })
    }
}


// handler for video upload

exports.videoUplode = async(req,res)=>{
    try{

        //fetch details

        const {name,tags,email} = req.body;
        console.log(name,tags,email);

        const file = req.files.videoFile;

        //validation 

        const supportedTypes = ["mp4" ,"mov"];
        const fileType = file.name.split(".")[1].toLowerCase();

        if(!isFilesupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,

                message:"File formet Not Supported",
            })
        }
         // if file formet is supported then uplode file on cloudinary

         const response  = await uplodefiletocloudinary(file,"first file");

         //uplode file on databases
 
         const fileData = await File.create({
             name,
             tags,
             email,
             imageUrl:response.secure_url
         });
 
         res.json({
             success:true,
             imageUrl:response.secure_url,
             message:"Video Successfully Uploaded",
         })

    }
    catch(error){
        console.error(error);
        res.status(400).json({
            success:false,
            message:"Something went Wrong",
        })
    }
    
}



// imageSizeReducer

exports.imageSizeReducer = async(req,res)=>{
    try{

          // fetch data 
        const {name ,tags , email} = req.body;
        console.log(name , tags , email);
        //fetch data from body
        const file=req.files.imageFile;
        console.log(file); 

        //vaildtion
        const supportedTypes = ["jpg" ,"jpeg", "png"];

        const fileType = file.name.split(".")[1].toLowerCase();

        if(!isFilesupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,

                message:"File formet Not Supported",
            })
        }

        // if file formet is supported then uplode file on cloudinary

        const response  = await uplodefiletocloudinary(file,"first file",90);

        //uplode file on databases

        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url
        });

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:"Image Successfully Uploaded",
        })
    }
    catch(error){
        console.error(error);
        res.status(400).json({
            success:false,
            message:"Something went Wrong",
        })
    }
}