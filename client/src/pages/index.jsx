import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
  ChatBubbleBottomCenterTextIcon,
  HeartIcon,
  BookmarkIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className='bg-gray-100'>
      <div className='container mx-auto lg:max-w-screen-xl'>
        <div className='App grid min-h-screen gap-8 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)] '>
          {/* Category Desktop */}
          <div className='hidden md:col-span-3 md:row-span-2 md:block'>
            <div className='overflow-hidden rounded-3xl bg-white'>
              {/* Accordion Header  */}
              <div
                className='flex cursor-pointer items-center justify-between bg-indigo-300 p-4'
                onClick={() => setIsOpen(!isOpen)}
              >
                <span>دسته بندی مقالات</span>
                <ChevronDownIcon
                  className={`h-6 w-6 transition-all duration-200 ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </div>
              {/* Accordion Content  */}
              <div className={`${isOpen ? 'block' : 'hidden'}`}>
                <Link href='#'>
                  <a className='mb-1 block py-2 pr-4 hover:bg-indigo-100'>
                    همه مقالات
                  </a>
                </Link>
                <Link href='#'>
                  <a className='mb-1 block py-2 pr-4 hover:bg-indigo-100'>
                    ریکت
                  </a>
                </Link>
                <Link href='#'>
                  <a className='block py-2 pr-4 hover:bg-indigo-100'>
                    جاوا اسکریپت
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/* Sort bar Desktop */}
          <div className='hidden md:col-span-9 md:block'>
            <div className='flex items-center rounded-3xl bg-white px-4'>
              <div className='flex items-center gap-x-2'>
                <AdjustmentsHorizontalIcon className='h-6 w-6' />
                <span className='text-slate-500'>مرتب سازی:</span>
                <ul className='mr-4 flex items-center gap-x-6'>
                  <li className='cursor-pointer py-4 text-slate-700'>
                    پربازدیدترین
                  </li>
                  <li className='cursor-pointer py-4 text-slate-700'>
                    محبوب ترین
                  </li>
                  <li className='cursor-pointer py-4 text-slate-700'>
                    جدیدترین
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Blog Section */}
          <div className='grid grid-cols-6 gap-8 bg-white md:col-span-9'>
            {[
              'nextjs.png',
              'nuxtjs.png',
              'vuejs.png',
              'nodejs.png',
              'reactjs.png',
              'javascript.png',
              'tailwind.png',
            ].map((item, index) => {
              return (
                <div
                  key={index}
                  className='col-span-6 flex flex-col rounded-3xl bg-white p-2 md:col-span-3 lg:col-span-2'
                >
                  {/* Image: Post Cover */}
                  <div className='aspect-h-9 aspect-w-16 mb-6'>
                    <img
                      src={`/images/${item}`}
                      alt=''
                      className='h-full w-full rounded-2xl object-cover object-center'
                    />
                  </div>
                  {/* Blog Content */}
                  <div className='flex w-full flex-1 flex-col justify-between rounded-2xl bg-gray-100 p-2'>
                    {/* Title */}
                    <h2 className='mb-4 font-bold'>بررسی کامل ریکت</h2>
                    {/* Blog Data */}
                    <div>
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
                            امیرحسین
                          </span>
                        </div>
                        {/* Category */}
                        <span className='cursor-pointer rounded-xl bg-blue-100 px-2 py-1 text-xs text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-blue-100'>
                          ری اکت
                        </span>
                      </div>
                      {/* Icons */}
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-x-2'>
                          <button className='flex items-center gap-x-1 rounded-md bg-gray-200 px-1 py-0.5'>
                            <ChatBubbleBottomCenterTextIcon className='h-4 w-4 stroke-slate-600' />
                            <span className='text-xs text-slate-600'>4</span>
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
                            <span className='text-xs text-red-500'>7</span>
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
                            زمان مطالعه: 20 دقیقه
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
