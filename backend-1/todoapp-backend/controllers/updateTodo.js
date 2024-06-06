const Todo  = require("../models/Todo");

exports.updateById = async(req,res)=>{
    try{
        const id = req.params.id;
        const {title,description} = req.body;
        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt:Date.now()},
        )
        res.status(200)
        .json({
            sucess:true,
            data:todo,
            messae:`updated sucessfully for given id${id}`
        })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            sucess:false,
            error:err.messae,
            message:"server error"
        })
    }
}