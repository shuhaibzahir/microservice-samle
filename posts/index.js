const express = require('express')
const app = express()

app.use(express.urlencoded({extended:false}))

app.post('/posts',(req,res)=>{
    
})















app.listen(5050,()=>{
    console.log("this is running port 5050")
})