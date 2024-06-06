const Post =require("../models/postModel");
const Like = require("../models/likeModel");

exports.likePost = async(req,res)=>{
    try{

        const {post,user} = req.body;

        const like=new Like({
            post,user,
        })

        const savedLike =await like.save();

        const updatedPost = await Post.findByIdAndUpdate(post,{$push: {likes:savedLike._id}},{new:true})
        .populate("likes").exec();
        res.json({
            post:updatedPost,
        })
    }
    catch(err){
        return res.status(500).json({
            error:"error while liking post"
        });
    }
}

exports.unlikePost = async(req,res)=>{
    try{
        const {post,like}=req.body;

        //find and delete the like id from like's array

        const deleteLike = await Like.findOneAndDelete({post:post,_id:like});

        // update thee post collection

        const updatePost = await Post.findByIdAndUpdate(post,{$pull:{likes:deleteLike._id}},{new:true});

        res.json({
            post:updatePost,
        })

    }
    catch(err){
        return res.status(500).json({
            error:"error while unliking post"
        });
    }
}