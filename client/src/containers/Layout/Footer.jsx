import { HeartIcon } from '@heroicons/react/24/solid';

const Footer = () => {
  return (
    <footer className='fixed bottom-0 left-0 right-0 w-full bg-gray-200 py-1'>
      <p
        className='flex items-center justify-center text-gray-700'
        dir='ltr'
      >
        Made with <HeartIcon className='w-6 h-6 fill-red-500 mx-1'/> by AmirHossein
      </p>
    </footer>
  );
};

export default Footer;
