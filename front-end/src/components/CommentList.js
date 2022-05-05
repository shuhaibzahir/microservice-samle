

const CommentList = ({comment}) => {
 
  return (
    <div> 
        <ul>
            {comment.map((i)=><li key={i.id}>{i.content}</li>)}
        </ul>
</div>
  )
}

export default CommentList