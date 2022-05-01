import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CommentList = ({postId}) => {
    const [comments ,setComments] =useState([])
    const fetchComments= async()=>{
       const res = await axios.get(`http://localhost:6060/posts/${postId}/comments`)
       setComments(res.data)
    }
    useEffect(()=>{
        fetchComments()
    },[])
  return (
    <div> 
        <ul>
            {comments.map((i)=><li key={i.id}>{i.content}</li>)}
        </ul>
</div>
  )
}

export default CommentList