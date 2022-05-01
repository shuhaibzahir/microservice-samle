import React, { useState } from 'react'
import axios  from 'axios'
const CreateComment = ({id}) => {
    const [comment ,setComment] = useState('')
    const submiComment =async(e)=>{
        e.preventDefault()
       await axios.post(`http://localhost:6060/posts/${id}/comments`,{content:comment})
       setComment('')
    }
  return (
    <div >
    <h4>Add comment</h4>
    <form onSubmit={submiComment}>
    <input type={"text"} placeholder="enter your comment" value={comment} onChange={(e)=>{setComment(e.target.value)}} className='input-box'/><br/>
    <button className='btn btn-primary'>add comment</button>
    </form>
</div>
  )
}

export default CreateComment