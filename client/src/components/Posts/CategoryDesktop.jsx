import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';

const CategoryDesktop = ({ postCategories }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
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
        <Link href='/blogs'>
          <a className='mb-1 block py-2 pr-4 hover:bg-indigo-100'>همه مقالات</a>
        </Link>

        {postCategories.data.map((category) => {
          return (
            <Link href={`/blogs/${category.englishTitle}`} key={category._id}>
              <a className='mb-1 block py-2 pr-4 hover:bg-indigo-100'>
                {category.title}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryDesktop;
