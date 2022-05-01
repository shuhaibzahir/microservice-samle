import React from 'react'
import AddComment from "./CreateComment"
import CommentList from './CommentList'

const Postview = ({post}) => {
  return (
    <div style={{padding:"10px"}}>
        <h1>{post.title}</h1>
        <p>comments</p>
        <CommentList id={post.id} />
        <AddComment id={post.id}/>

    </div>
  )
}

export default Postview