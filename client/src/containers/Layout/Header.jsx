import Link from 'next/link';

const Header = () => {
  return (
    <header className={`sticky top-0 z-40 mb-8 bg-white py-2 shadow-md`}>
      <div
        className={`container mx-auto px-4 transition-all md:px-0 xl:max-w-screen-xl 
  `}
        // className={`container mx-auto px-4 transition-all md:px-0 xl:max-w-screen-xl
        // ${loading ? 'opacity-0' : 'opacity-100'}`}
      >
        <nav className='flex justify-between'>
          <ul className='flex items-center gap-x-5'>
            <li>
              <Link href='/'>
                <a className='block py-2'>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/blogs'>
                <a className='block py-2'>Blogs</a>
              </Link>
            </li>
          </ul>
          <div className='flex items-center gap-x-4'>
            {/* <button
              className='rounded bg-red-600 px-2 py-1 text-red-100'
              // onClick={() => dispatch(signout())}
            >
              خروج
            </button> */}
            <Link href='/profile'>
              <a className='block py-2'>
                Profile - <span className='text-sm'>user name</span>
              </a>
            </Link>
            <Link href='/signup'>
              <a className='block'>ثبت نام</a>
            </Link>
            <Link href='/signin'>
              <a className='block'>ورود</a>
            </Link>

            {/* {user ? (
              <>
                <button
                  className='rounded bg-red-600 px-2 py-1 text-red-100'
                  // onClick={() => dispatch(signout())}
                >
                  خروج
                </button>
                <Link href='/profile'>
                  <a className='block py-2'>
                    Profile - <span className='text-sm'>{user.name}</span>
                  </a>
                </Link>
              </>
            ) : (
              <>
                <Link href='/signup'>
                  <a className='block'>ثبت نام</a>
                </Link>
                <Link href='/signin'>
                  <a className='block'>ورود</a>
                </Link>
              </>
            )} */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
