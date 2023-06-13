import axios from 'axios';
import { LinkIcon, BookmarkIcon } from '@heroicons/react/24/outline';
import { BookmarkIcon as BookmarkSolidIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import toLocalDate from '@/utils/toLocalDate';
import { toPersianDigits } from '@/utils/toPersianDigits';

const PostPage = ({ post }) => {
  console.log(post);
  return (
    <div className='h-screen bg-gray-100'>
      <header className='mx-auto mb-12 flex max-w-screen-md flex-col gap-y-5 md:flex-row md:items-start md:justify-between'>
        {/* Author Data */}
        <div className='flex items-stretch'>
          <img
            src='/images/user.png'
            alt={post.author.name}
            className='h-14 w-14 rounded-full ring-2 ring-white md:h-20 md:w-20'
          />
          <div className='mr-4 flex flex-col justify-between'>
            <div className='flex'>
              <span className='text-base font-extrabold'>
                {post.author.name}
              </span>
              <Link href={`/blogs/${post.category.englishTitle}`}>
                <a className='mr-2 rounded-full border border-blue-500 bg-white px-3 py-1 text-xs text-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white  '>
                  {post.category.title}
                </a>
              </Link>
            </div>
            <span className='hidden text-xs font-normal md:block'>
              {post.author.biography}
            </span>
            <div className='text-myGray-400 text-sm font-normal '>
              <span>{toLocalDate(post.createdAt)}</span>
              <span className='mx-1'> &bull;</span>
              <span>
                <span> خواندن</span>
                <span> {toPersianDigits(post.readingTime)} </span>
                <span>دقیقه </span>
              </span>
            </div>
          </div>
        </div>
        {/* Interactions Button */}
        <div className='flex'>
          <button>
            <LinkIcon className='h-6 w-6 cursor-pointer text-gray-500 hover:text-black ' />
          </button>
          <button className='mr-4 flex items-center rounded-full border border-gray-300 px-3 py-1 text-gray-500 hover:text-gray-600'>
            <span className='ml-1 text-xs '>
              {post.isBookmarked ? 'ذخیره شده' : 'ذخیره'}
            </span>
            {post.isBookmarked ? (
              <BookmarkSolidIcon className='h-6 w-6 fill-current' />
            ) : (
              <BookmarkIcon className='h-6 w-6 stroke-current' />
            )}
          </button>
        </div>

        {/* <button className='mr-4 flex w-6 items-center rounded-full border border-gray-300 px-3 py-1 text-gray-500 hover:text-gray-600'>
            <span className='ml-1 text-xs'>
              {post.isBookmarked ? 'ذخیره شده' : 'ذخیره '}
            </span>
            {post.isBookmarked ? (
              <BookmarkIcon className='h-6 w-6 fill-black stroke-gray-500' />
            ) : (
              <BookmarkIcon className='h-6 w-6 stroke-gray-500' />
            )}
          </button> */}
      </header>
    </div>
  );
};

export default PostPage;

export async function getServerSideProps(context) {
  const { query } = context;
  const {
    data: { data },
  } = await axios.get(`http://localhost:5000/api/posts/${query.postSlug}`);

  return {
    props: {
      post: data,
    },
  };
}
