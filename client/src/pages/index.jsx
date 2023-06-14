import axios from 'axios';
import PostList from '@/components/Posts/PostList';
import CategoryMobile from '@/components/Posts/CategoryMobile';
import SortBar from '@/components/Posts/SortBar';
import CategoryDesktop from '@/components/Posts/CategoryDesktop';

export default function Home({ blogsData, postCategories }) {
  return (
    <div className='bg-gray-100'>
      <div className='container mx-auto px-4 md:px-0 lg:max-w-screen-xl'>
        <div className='App grid min-h-screen gap-8 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)] '>
          <div className='hidden md:col-span-3 md:row-span-2 md:block'>
            <CategoryDesktop postCategories={postCategories} />
          </div>
          <CategoryMobile postCategories={postCategories} />
          <div className='hidden md:col-span-9 md:block'>
            <SortBar />
          </div>
          <div className='grid grid-cols-6 gap-8 md:col-span-9'>
            <PostList blogsData={blogsData.docs} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { data: result } = await axios.get(
    'http://localhost:5000/api/posts?page=1&limit=10'
  );
  const { data: postCategories } = await axios.get(
    'http://localhost:5000/api/post-category'
  );
  const { data } = result;
  return {
    props: {
      blogsData: data,
      postCategories,
    },
  };
}
