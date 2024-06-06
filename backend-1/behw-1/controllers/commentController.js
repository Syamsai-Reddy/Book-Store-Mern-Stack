//import comment model and post model

const Post=require("../models/postModel");
const Comment = require("../models/commentModel")


exports.createComment = async(req,res)=>{
    try{
        //fetch data from req body
        const {post,user,body} =req.body;
        //create comment model for the above data
        const comment = new Comment({
            post,user,body
        });

        //save the new comment into data base

        const saveComment = await comment.save();

        //find the post by id and add new comment to its comment array

        const updatedPost = await Post.findByIdAndUpdate(post,{$push: {comments: saveComment._id}},{new:true})

         .populate("comments")//populate the comment array with comment document
        .exec(); //means execute
        res.json({
            post:updatedPost,
        }) 
    }
    catch(error){
        return res.status(500)
        .json({
            error:"error while  Creating comment",
        })
    }
}