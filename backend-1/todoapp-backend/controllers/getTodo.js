const Todo = require("../models/Todo");

exports.getTodos = async(req,res)=>{
    try{
        
        const todos = await Todo.find({});

        res.status(200)
        .json({
            sucess:true,
            data:todos,
            message:"Enteir todo data is fetched sucessfully",
        });
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            sucess:false,
            error:err.message,
            message:"server error"
        });
    }
}

exports.getTodoById = async(req,res)=>{
    try{
        const id = req.params.id;
        const todo=await Todo.findById({_id:id});

        if(!todo){
            return res.status(404)
            .json({
                sucess:false,
                message:"No Data found by the given id"
            })
        }

        //data found by given id

        return res.status(200)
        .json({
            sucess:true,
            data:todo,
            message:`todo ${id} data sucessfully found`
        })

    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            sucess:false,
            error:err.message,
            message:"Data Not Found"
        })

    }
}