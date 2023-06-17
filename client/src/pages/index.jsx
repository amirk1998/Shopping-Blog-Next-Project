import Layout from '@/containers/Layout';
import { useAuth } from '@/context/AuthContext';

export default function Home() {
  const { user, loading } = useAuth();
  console.log(user);

  return (
    <Layout>
      <div className='container mx-auto lg:max-w-screen-xl'>
        {user ? (
          <h1 className='text-2xl font-bold'> سلام {user.name} به Next-App خوش آمدی </h1>
        ) : (
          <h1 className='text-2xl font-bold'>به Next-App خوش آمدی</h1>
        )}
      </div>
    </Layout>
  );
}
