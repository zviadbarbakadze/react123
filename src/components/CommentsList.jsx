const CommentsList = ({ comments }) => {
  return (
    <div>
      <h3>Comment:</h3>
      {comments.map((comment) => (
        <div className="comment" key={comment.postedBy + ": " + comment.text}>
          <h4>{comment.postedBy}</h4>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
