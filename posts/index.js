const express = require('express')
const {randomBytes} = require('crypto')
const cors = require('cors')
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
const posts ={}

app.get("/posts",(req,res)=>{
    res.send(posts)
})

app.get("/posts/:id",(req,res)=>{
    const {id} =req.params
})

app.post('/posts',(req,res)=>{
    console.log(req.body)
   const id =  randomBytes(4).toString('hex');
    posts[id]={
        id,
        title:req.body.title
    }
    res.status(201).send(posts[id])
})















app.listen(5050,()=>{
    console.log("this is running port 5050")
})