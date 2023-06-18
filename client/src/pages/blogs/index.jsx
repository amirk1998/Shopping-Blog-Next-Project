import queryString from 'query-string';
import PostList from '@/components/Posts/PostList';
import CategoryMobile from '@/components/Posts/CategoryMobile';
import SortBar from '@/components/Posts/SortBar';
import CategoryDesktop from '@/components/Posts/CategoryDesktop';
import Layout from '@/containers/Layout';
import http from '@/services/httpService';
import PaginationComponent from '@/common/Pagination';

const Blogs = ({ blogsData, postCategories }) => {
  return (
    <Layout>
      <div className='container mx-auto px-4 pb-8 md:px-0 lg:max-w-screen-xl'>
        <CategoryMobile postCategories={postCategories} />
        <div className='App grid min-h-screen gap-8 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)] '>
          <div className='hidden md:col-span-3 md:row-span-2 md:block'>
            <CategoryDesktop postCategories={postCategories} />
          </div>
          <div className='hidden md:col-span-9 md:block'>
            <SortBar />
          </div>
          <div className='grid grid-cols-6 gap-8 md:col-span-9'>
            <PostList blogsData={blogsData.docs} />
            <PaginationComponent
              totalPages={blogsData.totalPages}
              page={blogsData.page}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;

export async function getServerSideProps({ req, query }) {
  const { data: result } = await http.get(
    `/posts?${queryString.stringify(query)}`,
    {
      headers: {
        Cookie: req.headers.cookie || '',
      },
    }
  );
  const { data: postCategories } = await http.get('/post-category');
  const { data } = result;
  return {
    props: {
      blogsData: data,
      postCategories,
    },
  };
}
