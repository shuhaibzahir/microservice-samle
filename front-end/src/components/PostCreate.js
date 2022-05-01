import React, { useState } from 'react'
import axios from "axios"
const PostCreate = ({setPosts}) => {
    const [title,setTitle] = useState('')
 const createPost = async()=>{
     if(title.trim().length>2){
         const data = {title}
     await axios.post('http://localhost:5050/posts',data) 
    }
 }

  return (
    <div className='box'>
        <h1>Create Post</h1>
        <input type={"text"} placeholder="enter your title" value={title} onChange={(e)=>{setTitle(e.target.value)}} className='input-box' style={{width:"100%"}}/> 
        <button className='btn btn-primary' onClick={()=>{createPost()}}>create</button>
    </div>
  )
}

export default PostCreate