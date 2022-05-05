const express = require('express')
const cors = require('cors')
const app = express()
const events = require("./events")
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

const posts ={}

app.post("/events",(req,res)=>{

    const {type}= req.body
    console.log(type)

    switch(type){
        case events.postCreated:
            posts[req.body.id]={id:req.body.id,title:req.body.title,comments:[]}
            break;
        case events.commentCreated:
            posts[req.body.data.postId].comments.push({id:req.body.data.id,content:req.body.data.content})
            break;
        default:
            break;
    }
    console.log(posts)
    res.send({status:true})
})

app.get("/posts",(req,res)=>{
    console.log('post sending',posts)
    res.send(posts)
})


app.listen(7070,()=>{
    console.log("started with 7070 data query service")
})