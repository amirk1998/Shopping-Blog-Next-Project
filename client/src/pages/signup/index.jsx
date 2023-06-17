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
  name: '',
  phoneNumber: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required('نام و نام خانوادگی را وارد کنید')
    .min(6, 'نام و نام خانوادگی باید حداقل شامل 6 کاراکتر باشد'),
  email: Yup.string().required('ایمیل را وارد کنید').email('ایمیل نامعتبر است'),
  phoneNumber: Yup.string()
    .required('شماره موبایل را وارد کنید')
    .matches(/^[0-9]{11}$/, 'شماره موبایل باید 11 رقم باشد')
    .nullable(),
  password: Yup.string()
    .required('رمز عبور را وارد کنید')
    .min(8, 'رمز عبور باید حداقل شامل 8 کارارکتر باشد'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'رمز عبور را مجددا وارد کنید')
    .required('رمز عبور هم خوانی ندارد'),
});

const RegisterForm = () => {
  const router = useRouter();
  const dispatch = useAuthActions();
  const { user, loading } = useAuth();

  const onSubmit = (values) => {
    const { name, email, phoneNumber, password } = values;
    dispatch({
      type: 'SIGNUP',
      payload: { name, email, phoneNumber, password },
    });
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
      <Head>
        <title>Front Hooks- Signup</title>
      </Head>
      <div className='container mx-auto px-4 md:max-w-md  md:px-4'>
        <form
          onSubmit={formik.handleSubmit}
          className='flex flex-col space-y-4'
        >
          <h1 className='mb-4 text-2xl font-black text-violet-700'>ثبت نام</h1>
          <Input label='نام و نام خانوادگی' name='name' formik={formik} />
          <Input label='ایمیل' name='email' formik={formik} />
          <Input
            type='tel'
            label='شماره موبایل'
            name='phoneNumber'
            formik={formik}
            placeholder='09121234567'
          />
          <Input
            label='رمز عبور'
            name='password'
            type='password'
            formik={formik}
          />
          <Input
            label='تکرار رمز'
            name='confirmPassword'
            type='password'
            formik={formik}
          />

          <button
            type='submit'
            disabled={!formik.isValid}
            className='w-full rounded-lg bg-violet-800 py-2 text-white'
          >
            ثبت نام
          </button>
          <Link href='/signin'>
            <p className='mt-4 cursor-pointer py-4'>
              قبلا ثبت نام کردی ؟ لاگین کنید
            </p>
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default RegisterForm;
