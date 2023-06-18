import Pagination from '@mui/material/Pagination';
import { useRouter } from 'next/router';
import routerPush from '@/utils/routerPush';

const PaginationComponent = ({ page, totalPages }) => {
  const router = useRouter();

  const pageHandler = (e, page) => {
    router.query.page = page;
    routerPush(router);
  };

  return (
    <div className='col-span-6 flex justify-center' dir='ltr'>
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={page}
          onChange={pageHandler}
          color='primary'
        />
      )}
    </div>
  );
};

export default PaginationComponent;
