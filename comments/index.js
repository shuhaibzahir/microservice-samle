const express = require('express')
const {randomBytes} = require('crypto')
const cors = require('cors')
const axios = require("axios")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
const commentsByPostId ={}

app.get("/posts/:id/comments",(req,res)=>{
    res.send(commentsByPostId[req.params.id]||[])
})

 

 

 app.post("/posts/:id/comments",async(req,res)=>{
     const {id}=req.params;
     const {content}=req.body;
     const commentId = randomBytes(4).toString('hex');
     const comments = commentsByPostId[id]||[]
     comments.push({id:commentId,content:content,status:'pending'})
     commentsByPostId[id]=comments
     await axios.post("http://event-bus-srv:4040/events",{
         type:'CommentCreated',
         data:{
             id:commentId, 
             postId:id,
             content,
             status:'pending'
         }
     }) 
     res.status(201).send(commentsByPostId[id])
 })

 
 app.post("/events",(req,res)=>{
     console.log(req.body)
     const {type}= req.body;
     switch(type){
         case 'CommentUpdated':
             const {comment}= req.body
            const postComments= commentsByPostId[req.body.postId]
            const currentComment = postComments.find((i)=>i.id==comment.id)
            currentComment.status=comment.status
             break;
         default:
             break;
     }
     res.send({status:'ok'})
 })

app.listen(6060,()=>{
    console.log("this is running port 6060 and this is for comments")
})