import Layout from '@/containers/Layout';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { useEffect } from 'react';
import Head from 'next/head';
import Input from '@/components/FormInput';
import { useAuth, useAuthActions } from '@/context/AuthContext';
import { useRouter } from 'next/router';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .required('لطفا ایمیل خود را وارد کنید')
    .email('ایمیل نامعتبر است'),
  password: Yup.string()
    .required('لطفا رمز عبور خود را وارد کنید')
    .min(8, 'رمز عبور باید حداقل شامل 8 کاراکتر باشد'),
});

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useAuthActions();
  const { user, loading } = useAuth();

  const onSubmit = (values) => {
    const { email, password } = values;
    dispatch({ type: 'SIGNIN', payload: values });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user]);

  return (
    <Layout>
      <Head>Sign In</Head>
      <div className='container mx-auto px-4 md:max-w-md  md:px-4'>
        <form
          onSubmit={formik.handleSubmit}
          className='flex flex-col space-y-4'
        >
          <h1 className='mb-4 text-2xl font-black text-violet-700'>ورود</h1>
          <Input label='ایمیل' name='email' formik={formik} />
          <Input
            label='رمز عبور'
            name='password'
            type='password'
            formik={formik}
          />

          <button
            type='submit'
            disabled={!formik.isValid}
            className='w-full rounded-lg bg-violet-800 py-2 text-white'
          >
            ورود
          </button>
          <Link href='/signup'>
            <p className='mt-4 cursor-pointer py-4'>
              هنوز ثبت نام نکردی؟ ثبت نام کن
            </p>
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default LoginForm;
