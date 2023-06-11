import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/outline';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-gray-100'>
      <div className='container mx-auto lg:max-w-screen-xl'>
        <div className='App grid min-h-screen gap-4 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)] '>
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
                    {' '}
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
          <div className='bg-blue-200 md:col-span-9'>Blogs</div>
        </div>
      </div>
    </div>
  );
}
