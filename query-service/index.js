const express = require('express')
const cors = require('cors')
const app = express()
const axios = require('axios')
const events = require("./events")
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

const posts ={}

const handleEvents = (type, data)=>{
    switch(type){
        case events.postCreated:
            posts[data.id]={id:data.id,title:data.title,comments:[]}
            break;
        case events.commentCreated:
            posts[data.data.postId].comments.push({id:data.data.id,content:data.data.content, status:data.status})
            break;
        case events.commentUpdated:
            const {comment}= data
            const postComments= posts[data.postId].comments
            const currentComment = postComments.find((i)=>i.id==comment.id)
            currentComment.status=comment.status
            currentComment.content=comment.content
           break;

        default:
            break;
    }
}

app.post("/events",(req,res)=>{
    const {type}= req.body
    handleEvents(type,req.body)
    res.send({status:true})
})

app.get("/posts",(req,res)=>{
    res.send(posts)
})


app.listen(7070,async()=>{
    console.log("started with 7070 data query service")
    const res = await axios.get("http://localhost:4040/events")
    res.data.forEach(event => {
        const {type}= event
        handleEvents(type,event)
    });
})