const express = require("express")
const axios = require('axios')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.post("/events",(req,res)=>{
    const {type}=req.body
    console.log(type)
    switch(type){
        case 'CommentCreated':
            const {content} = req.body.data
            const status = content.includes('orange')?'Rejected':'approved'
            axios.post("http://event-bus-srv:4040/events",{
                type:'CommentUpdated',
                postId:req.body.data.postId,
                comment:{
                    id:req.body.data.id,
                    content:req.body.data.content,
                    status
                }
            })
            res.send({status:"ok"})
        default:
            break;
    }
})



app.listen(8080,()=>{
    console.log("server of moderation started at 8080")
})