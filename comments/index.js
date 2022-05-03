const express = require('express')
const {randomBytes} = require('crypto')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
const commentsByPostId ={}

app.get("/posts/:id/comments",(req,res)=>{
    res.send(commentsByPostId[req.params.id]||[])
})

app.get("/posts/comments",(req,res)=>{
    res.send(commentsByPostId)
})


 

 app.post("/posts/:id/comments",(req,res)=>{
     const {id}=req.params;
     const {content}=req.body;
     const commentId = randomBytes(4).toString('hex');
     const comments = commentsByPostId[id]||[]
     comments.push({id:commentId,content:content})
     commentsByPostId[id]=comments
     res.status(201).send(commentsByPostId[id])
 })

 

app.listen(6060,()=>{
    console.log("this is running port 6060 and this is for comments")
})