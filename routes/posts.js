const express = require(`express`)
const path = require(`path`)
const router = express.Router();
const Post = require(`../models/Post`)

router.get(`/posts`, async (req, res) => {
    try{
        const posts = await Post.find()
        res.json(posts)
    }catch(err){
        res.json({message:err})
    }
})

router.use(express.static(path.join(__dirname, '../public')))


router.post(`/`, async (req, res) => {
    const post = new Post({
        name: req.body.name,
        role: req.body.role,
        rank: req.body.rank
    })
    try{

        const savedPost = await post.save()
        res.json(savedPost)
    }catch(err){
        res.json({message: err})
    }
})
//specific posts
router.get(`/:postId`, async (req,res) => {
    try{
   const post = await  Post.findById(req.params.postId)
   res.json(post)
    }catch(err){
        res.json({message: err})
    }
})

//delete post
router.delete(`/:postId`, async (req,res) => {
    try{
   const removedPost = await Post.remove({_id: req.params.postId})
   res.json(removedPost)
    }catch(err){
        res.json({message: err})
    }
})

//update post
router.patch(`/:postId`, async (req, res) => {
    try{
   const updatedPost = await Post.updateOne({_id: req.params.postId}, {$set : {rank: req.body.rank}})
    res.json(updatedPost)
}
catch(err){
    res.json({message: err})
}
})
module.exports = router