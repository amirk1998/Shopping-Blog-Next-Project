import { useState } from 'react';
import SingleComment from './SingleComment';
import CommentForm from './CommentForm';
import ReplyComment from './ReplyComment';

const PostComments = ({ post }) => {
  return (
    <div>
      <h2 className='mb-8 text-2xl font-extrabold text-slate-800 md:text-3xl'>
        نظرات
      </h2>
      {post.comments.map((comment, index) => {
        return (
          !comment.responseTo &&
          comment.status === 2 && (
            <div key={comment._id}>
              <SingleComment comment={comment} postId={post._id} />
              <ReplyComment
                comments={post.comments}
                parentCommentId={comment._id}
                postId={post._id}
              />
            </div>
          )
        );
      })}
      {/* Base Comment Form */}
      <div className='mt-8'>
        <label
          htmlFor='base_comment'
          className='mb-2 block text-sm font-bold text-slate-800 md:text-lg '
        >
          ارسال دیدگاه جدید
        </label>
        <CommentForm postId={post._id} responseTo={null} />
      </div>
    </div>
  );
};

export default PostComments;
