import routerPush from '@/utils/routerPush';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { useState } from 'react';

const sortOptions = [
  { label: 'پربازدیدترین', id: 'most' },
  { label: 'محبوب ترین', id: 'popular' },
  { label: 'جدیدترین', id: 'newest' },
];

const SortBar = () => {
  const router = useRouter();
  const [sort, setSort] = useState(router.query.sort || 'newest');

  const sortHandler = (id) => {
    setSort(id);
    router.query.sort = id;
    routerPush(router);
  };

  return (
    <div className='flex items-center rounded-3xl bg-white px-4'>
      <div className='flex items-center gap-x-2'>
        <AdjustmentsHorizontalIcon className='h-6 w-6' />
        <span className='text-slate-500'>مرتب سازی:</span>
        <ul className='mr-4 flex items-center gap-x-6'>
          {sortOptions.map(({ id, label }) => {
            return (
              <li
                className={`cursor-pointer py-4 text-slate-700 ${
                  id === sort
                    ? 'font-bold text-indigo-500 underline decoration-2 underline-offset-8 '
                    : ''
                }`}
                key={id}
                onClick={() => sortHandler(id)}
              >
                {label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SortBar;
