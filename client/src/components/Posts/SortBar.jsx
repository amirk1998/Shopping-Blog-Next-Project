import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const SortBar = () => {
  return (
    <div className='flex items-center rounded-3xl bg-white px-4'>
      <div className='flex items-center gap-x-2'>
        <AdjustmentsHorizontalIcon className='h-6 w-6' />
        <span className='text-slate-500'>مرتب سازی:</span>
        <ul className='mr-4 flex items-center gap-x-6'>
          <li className='cursor-pointer py-4 text-slate-700'>پربازدیدترین</li>
          <li className='cursor-pointer py-4 text-slate-700'>محبوب ترین</li>
          <li className='cursor-pointer py-4 text-slate-700'>جدیدترین</li>
        </ul>
      </div>
    </div>
  );
};

export default SortBar;
