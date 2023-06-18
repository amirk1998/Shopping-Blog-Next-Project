import SingleComment from './SingleComment';

const ReplyComment = ({ comments, parentCommentId, postId }) => {
  return comments.map((comment) => {
    return (
      parentCommentId === comment.responseTo && (
        <div className='mr-8' key={comment._id}>
          <SingleComment comment={comment} postId={postId} />
          <ReplyComment
            comments={comments}
            parentCommentId={comment._id}
            postId={postId}
          />
        </div>
      )
    );
  });
};

export default ReplyComment;
