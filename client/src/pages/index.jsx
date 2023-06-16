import Layout from '@/containers/Layout';
import { useAuth } from '@/context/AuthContext';

export default function Home() {
  const user = useAuth();
  console.log(user);

  return (
    <Layout>
      <div className='container mx-auto lg:max-w-screen-xl'>
        <h1 className='text-2xl font-bold'>This is Home Page</h1>
      </div>
    </Layout>
  );
}
