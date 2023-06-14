import axios from 'axios';
import { LinkIcon, BookmarkIcon } from '@heroicons/react/24/outline';
import { BookmarkIcon as BookmarkSolidIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import toLocalDate from '@/utils/toLocalDate';
import { toPersianDigits } from '@/utils/toPersianDigits';
import PostInteractions from '@/components/Posts/PostInteractions';
import { IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io';
import { FaTelegram } from 'react-icons/fa';

const PostPage = ({ post }) => {
  console.log(post);
  return (
    <div className='min-h-screen bg-gray-100'>
      <div className='container mx-auto md:max-w-screen-md'>
        <header className='mx-auto mb-12 flex flex-col gap-y-5 md:flex-row md:items-start md:justify-between'>
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
        </header>
        <main
          className='prose prose-xl prose-slate mx-auto mb-8 max-w-screen-md prose-h1:text-xl prose-h1:font-black prose-h2:text-xl prose-h2:font-extrabold prose-p:text-base prose-p:leading-8 prose-a:text-blue-500 prose-img:rounded-xl md:prose-h1:text-3xl md:prose-h2:text-2xl md:prose-p:text-lg md:prose-p:leading-10
        '
        >
          <h1>{post.title}</h1>
          <h2>عنوان تستی اول</h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <img src={post.coverImage} alt='' />
          <h2>عنوان تستی دوم</h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <h2>نحوه کانفیگ تیلویند</h2>
          <p>
            بدون استفاده از <a href='https://highlightjs.org/'>highlight.js</a>
            میتوان به سادگی کدها را داخل محتوای بلاگ ها قرار داد!
          </p>
          <p>
            به عنوان مثال، برای کانفیگ تیلویند باید از فایل
            <code>tailwind.config.js</code> استفاده کرد:
          </p>
          <pre dir='ltr'>{`module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
`}</pre>
        </main>
        {/* post tags like-bookmark */}
        <section>
          <ul className='mb-6 flex flex-wrap items-center gap-x-4'>
            {['ریکت', 'جاوااسکریپت', 'فرانت اند', 'Next.js'].map(
              (tag, index) => {
                return (
                  <li
                    key={index}
                    className='tex-sm mb-3 block cursor-pointer rounded-2xl bg-gray-200 px-3 py-1 text-gray-600 transition-all hover:bg-gray-300'
                  >
                    {tag}
                  </li>
                );
              }
            )}
          </ul>
          <div className='flex flex-col gap-y-8 md:flex-row md:justify-between'>
            {/* Like , Comment , Bookmark */}
            <PostInteractions
              post={post}
              className='w-full justify-evenly md:w-auto'
            />
            {/* Share Btns */}
            <div className='flex w-full items-center justify-evenly gap-x-3 md:w-auto md:gap-x-4'>
              <a href={`#`} target='_blank' className='block' rel='noreferrer'>
                <IoLogoLinkedin
                  size={30}
                  className='cursor-pointer fill-gray-400 transition-all duration-300 hover:fill-gray-500'
                />
              </a>
              <a href={`#`} target='_blank' className='block' rel='noreferrer'>
                <IoLogoTwitter
                  size={30}
                  className='cursor-pointer fill-gray-400 transition-all duration-300 hover:fill-gray-500'
                />
              </a>
              <a href={`#`} target='_blank' className='block' rel='noreferrer'>
                <FaTelegram
                  size={30}
                  className='cursor-pointer fill-gray-400 transition-all duration-300 hover:fill-gray-500'
                />
              </a>
            </div>
          </div>
        </section>
      </div>
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
