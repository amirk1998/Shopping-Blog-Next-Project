import AuthProvider from '@/context/AuthContext';
import { Toaster } from 'react-hot-toast';
import '../../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />;
      <Toaster
        position='top-center'
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              background: '#22c55e',
              color: '#fff',
            },
          },
          error: {
            duration: 3000,
            style: {
              background: '#ef4444',
              color: '#fff',
            },
          },
        }}
      />
    </AuthProvider>
  );
}

export default MyApp;
