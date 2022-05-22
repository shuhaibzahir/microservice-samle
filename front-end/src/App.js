import { useEffect, useState } from 'react';
import PostCreate from './components/PostCreate'
import Postview from "./components/Postview"
import axios from 'axios';
function App() {
  const [posts,setPosts]= useState({})

  const fetchPosts = async()=>{
    const res  = await axios.get("http://localhost:30006/posts")
    console.log(res.data)
    setPosts(res.data)
  } 

  useEffect(()=>{
    fetchPosts()
  },[])

  const renderedPosts = Object.values(posts).map((item)=><Postview post={item} key={item.id}/>)
  return (
    <div className="">
        <PostCreate setPosts={setPosts}/>
    <div className='row'>
     {renderedPosts}
    </div>
    </div>
  );
}

export default App;
