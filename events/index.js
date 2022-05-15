const express = require("express")
const axios = require("axios")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const events =[]
app.post("/events",(req,res)=>{
    const event  = req.body
    events.push(event)
    axios.post("http://localhost:5050/events", event)
    axios.post("http://localhost:6060/events", event)
    axios.post("http://localhost:7070/events", event)
    axios.post("http://localhost:8080/events", event)
    res.send({status:'ok'})
})

app.get("/events",(req,res)=>{
    res.send(events)
})

app.listen(4040,()=>{
    console.log('server of events started on 4040...')
})