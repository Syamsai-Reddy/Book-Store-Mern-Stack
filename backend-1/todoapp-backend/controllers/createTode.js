//importing todo from todo file
const Todo =require("../models/Todo");

//define route handler

exports.createTodo = async(req,res)=>{
    try{
        //extract title ,descreption from request node
         
        const {title,description} = req.body;

        //create new todo obj and insert it into db

        const response = await Todo.create({title,description});

        //send a json response with sucess flag

        res.status(200).json({
            sucess:true,
            data:response,
            mesage:"Entry created sucessfully",
        })
    }
    catch(err){
        console.error(err);
        console.log(er);
        res.status(500).json({
            sucess:false,
            data:"internal server error",
            message:err.message,
        })
    }
}