import http from '@/services/httpService';
import { toPersianDigits } from '@/utils/toPersianDigits';
import {
  ChatBubbleBottomCenterTextIcon,
  HeartIcon,
  BookmarkIcon,
} from '@heroicons/react/24/outline';
import {
  HeartIcon as HeartSolid,
  BookmarkIcon as BookmarkSolidIcon,
} from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';

const PostInteractions = ({ post, isSmall, className }) => {
  const iconSize = `${isSmall ? 'w-4 h-4' : 'w-6 h-6'}`;

  const router = useRouter()

  const likeHandler = (postId) => {
    http.put(`/posts/like/${postId}`).then(res=>{
      router.push(router)
    }).catch();
  };

  const bookmarkHandler = (postId) => {
    http.put(`/posts/bookmark/${postId}`).then(res=>{
      router.push(router)
    }).catch();
  };

  return (
    <div
      className={`flex items-center ${
        isSmall ? 'gap-x-2' : 'gap-x-4'
      } ${className} `}
    >
      <button className='flex items-center gap-x-1 rounded-md bg-gray-200 px-1 py-0.5 text-slate-600 hover:bg-slate-600 hover:text-gray-200'>
        <ChatBubbleBottomCenterTextIcon
          className={`${iconSize} stroke-current`}
        />
        <span className='text-xs'>{toPersianDigits(post.commentsCount)}</span>
      </button>
      <button
        onClick={() => likeHandler(post._id)}
        className='flex items-center gap-x-1 rounded-md bg-red-200 px-1 py-0.5 text-red-500 hover:bg-red-500 hover:text-red-100'
      >
        {post.isLiked ? (
          <HeartSolid className={`${iconSize} fill-current`} />
        ) : (
          <HeartIcon className={`${iconSize} stroke-current`} />
        )}
        <span className='text-xs'>{toPersianDigits(post.likesCount)}</span>
      </button>
      <button  onClick={() => bookmarkHandler(post._id)} className='flex items-center gap-x-1 rounded-md bg-blue-200 px-1 py-0.5 text-blue-500 hover:bg-blue-500 hover:text-blue-200'>
        {post.isBookmarked ? (
          <BookmarkSolidIcon className={`${iconSize} fill-current`} />
        ) : (
          <BookmarkIcon className={`${iconSize} stroke-current`} />
        )}
      </button>
    </div>
  );
};

export default PostInteractions;
