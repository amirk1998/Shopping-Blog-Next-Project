import { ClockIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import PostInteractions from './PostInteractions';
import { toPersianDigits } from '@/utils/toPersianDigits';

const PostList = ({ blogsData }) => {
  return blogsData.map((blog) => {
    return (
      <div
        key={blog._id}
        className='col-span-6 flex h-[360px] flex-col rounded-3xl bg-white p-2 shadow-sm hover:shadow-xl md:col-span-3 lg:col-span-2'
      >
        {/* Image: Post Cover */}
        <div className='aspect-h-9 aspect-w-16 mb-6'>
          <Link href={`/post/${blog.hashId}/${blog.slug}`}>
            <a>
              <img
                src={blog.coverImage}
                alt=''
                className='h-full w-full rounded-3xl object-cover object-center py-1'
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
              <PostInteractions post={blog} isSmall />
              <div className='flex items-center'>
                <ClockIcon className='h-4 w-4 stroke-slate-500' />
                <span className='text-xs text-slate-500'>
                  زمان مطالعه: {toPersianDigits(blog.readingTime)} دقیقه
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
