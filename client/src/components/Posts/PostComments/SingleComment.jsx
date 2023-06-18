import toLocalDate from '@/utils/toLocalDate';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import CommentForm from './CommentForm';

const SingleComment = ({ comment, postId }) => {
  const [isReply, setIsReply] = useState(false);

  return (
    <div className='mb-8 overflow-hidden rounded-xl border border-gray-300 bg-white p-4 shadow-lg '>
      <div className='flex items-center justify-start '>
        <UserCircleIcon className='h-12 w-12 stroke-gray-400' strokeWidth={1} />
        <div className='mr-4 flex flex-col justify-between'>
          <span className='block text-sm text-gray-600 '>
            {comment.writer?.name}
          </span>
          <span className='mt-2 block text-xs text-gray-600'>
            {toLocalDate(comment.createdAt)}
          </span>
        </div>
      </div>
      <div className='mt-4 leading-10'>{comment.content}</div>
      <button
        className='cursor-pointer p-4 text-sm text-blue-600'
        onClick={() => setIsReply(!isReply)}
      >
        {isReply ? 'بیخیال !' : 'پاسخ به ؟'}
      </button>
      {isReply && (
        <div className='mt-8'>
          <label htmlFor='base_comment' className='text-sm text-gray-500  '>
            در حال پاسخ به {comment.writer?.name}
          </label>
          <CommentForm
            postId={postId}
            responseTo={comment._id}
            setIsReply={setIsReply}
          />
        </div>
      )}
    </div>
  );
};

export default SingleComment;
