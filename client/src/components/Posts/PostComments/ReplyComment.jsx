import SingleComment from './SingleComment';

const ReplyComment = ({ comments, parentCommentId }) => {
  return comments.map((comment) => {
    return (
      parentCommentId === comment.responseTo && (
        <div className='mr-8' key={comment._id}>
          <SingleComment comment={comment} />
          <ReplyComment comments={comments} parentCommentId={comment._id} />
        </div>
      )
    );
  });
};

export default ReplyComment;
