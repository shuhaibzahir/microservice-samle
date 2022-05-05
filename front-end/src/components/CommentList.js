

const CommentList = ({comment}) => {
  console.log(comment)
  return (
    <div> 
        <ul>
            {comment.map((i)=><li key={i.id}>{i.content} status:{i.status}</li>)}
        </ul>
</div>
  )
}

export default CommentList