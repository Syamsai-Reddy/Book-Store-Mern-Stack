const Todo = require("../models/Todo");

exports.deletetodo = async (req,res)=>{
    try{
        const id=req.params.id;
        await Todo.findByIdAndDelete(id);

        res.json({
            sucess:true,
            message:"Delete sucessful",
        })
    }
    catch(err){
        console.error(err);
        res.statue(500)
        .json({
            sucess:false,
            error:err.message,
            message:"server error"
        })
    }
}