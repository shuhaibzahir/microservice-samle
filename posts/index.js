const express = require('express')
const {randomBytes} = require('crypto')
const cors = require('cors')
const axios = require('axios')
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

app.post('/posts',async(req,res)=>{
    console.log(req.body)
   const id =  randomBytes(4).toString('hex');
   const title = req.body.title
    posts[id]={
        id,
        title
    }
   await axios.post('http://localhost:4040/events',{
       type:'PostCreated',
       id,
       title
   })
   
    res.status(201).send(posts[id])
})


app.post('/events',(req,res)=>{
    console.log('Recieved Events',req.body.type)
})












app.listen(5050,()=>{
    console.log("this is running port 5050 and this is post")
})