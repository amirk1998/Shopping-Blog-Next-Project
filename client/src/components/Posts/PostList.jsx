import { toPersianDigits } from '@/utils/toPersianDigits';
import {
  ChatBubbleBottomCenterTextIcon,
  HeartIcon,
  BookmarkIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';

const PostList = ({ blogsData }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  return blogsData.docs.map((blog) => {
    return (
      <div
        key={blog._id}
        className='col-span-6 flex flex-col rounded-3xl bg-white p-2 md:col-span-3 lg:col-span-2'
      >
        {/* Image: Post Cover */}
        <div className='aspect-h-9 aspect-w-16 mb-6'>
          <Link href={`/post/${blog.hashId}/${blog.slug}`}>
            <a>
              <img
                src={blog.coverImage}
                alt=''
                className='h-full w-full rounded-2xl object-cover object-center py-1'
              />
            </a>
          </Link>
        </div>
        {/* Blog Content */}
        <div className='flex w-full flex-1 flex-col justify-between rounded-2xl bg-gray-100 p-2'>
          {/* Title */}
          <Link href={`/post/${blog.hashId}/${blog.slug}`}>
            <a>
              <h2 className='font-bold'>{blog.title}</h2>
            </a>
          </Link>
          {/* Blog Data */}
          <div className='mt-4'>
            <div className='mb-4 flex items-center justify-between'>
              <div className='flex items-center'>
                {/* Image */}
                <img
                  src='/images/user.png'
                  alt=''
                  className='ml-2 h-6 w-6 rounded-full ring-2 ring-white'
                />
                {/* Writer's name */}
                <span className='text-sm text-slate-600'>
                  {blog.author.name}
                </span>
              </div>
              {/* Category */}
              <Link href={`/blogs/${blog.category.englishTitle}`}>
                <a className='cursor-pointer rounded-xl bg-blue-100 px-2 py-1 text-xs text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-blue-100'>
                  {blog.category.englishTitle}
                </a>
              </Link>
            </div>
            {/* Icons */}
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-x-2'>
                <button className='flex items-center gap-x-1 rounded-md bg-gray-200 px-1 py-0.5'>
                  <ChatBubbleBottomCenterTextIcon className='h-4 w-4 stroke-slate-600' />
                  <span className='text-xs text-slate-600'>
                    {blog.commentsCount}
                  </span>
                </button>
                <button
                  className='flex items-center gap-x-1 rounded-md bg-red-200 px-1 py-0.5'
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <HeartIcon
                    className={`h-4 w-4 stroke-red-500 ${
                      isLiked ? 'fill-red-500' : ''
                    }`}
                  />
                  <span className='text-xs text-red-500'>
                    {blog.likesCount}
                  </span>
                </button>
                <button
                  className='flex items-center gap-x-1 rounded-md bg-blue-200 px-1 py-0.5'
                  onClick={() => setIsBookmarked(!isBookmarked)}
                >
                  <BookmarkIcon
                    className={`h-4 w-4 stroke-blue-500 ${
                      isBookmarked ? 'fill-blue-500' : ''
                    }`}
                  />
                </button>
              </div>
              <div className='flex items-center'>
                <ClockIcon className='h-4 w-4 stroke-slate-500' />
                <span className='text-xs text-slate-500'>
                  زمان مطالعه: {blog.readingTime} دقیقه
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default PostList;
