import Link from 'next/link';
import { useRouter } from 'next/router';

const CategoryMobile = ({ postCategories }) => {
  const { query } = useRouter();

  return (
    <div className='flex gap-x-4 overflow-x-auto pb-5 md:hidden'>
      <Link href='/blogs'>
        <a className={`block whitespace-nowrap rounded-3xl border border-slate-400 px-3 py-1 text-sm text-slate-600 ${!query.categorySlug ? 'bg-indigo-500 text-white border-indigo-600' : ''}`}>
          همه مقالات
        </a>
      </Link>

      {postCategories.data.map((category) => {
        return (
          <Link href={`/blogs/${category.englishTitle}`} key={category._id}>
            <a
              className={`block whitespace-nowrap rounded-3xl border border-slate-400 px-3 py-1 text-sm text-slate-600 ${query.categorySlug === category.englishTitle ? 'bg-indigo-500 text-white border-indigo-600' : ''}`}
            >
              {category.title}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryMobile;
