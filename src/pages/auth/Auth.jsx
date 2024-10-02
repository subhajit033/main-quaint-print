import { AuthTop } from '@/assets/assets';

import { useDispatch } from 'react-redux';
import { ApiService } from '@/api/api.service';
import { useState } from 'react';
// import AuthLayout from '@/layout/AuthLayout';
import toast from 'react-hot-toast';
import { Loader2 } from 'lucide-react';
import { setAuthentication, setUserData } from '@/redux/auth.slice';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '@/utils/firebase';
import { Toaster } from 'react-hot-toast';

const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const googleLogin = ApiService.userService.useGoogleLogin();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const [firstName, lastName] = user.displayName.split(' ');
        const userDetails = {
          firstName,
          lastName,
          avatar: user?.photoURL,
          email: user?.email,
        };
        googleLogin.mutate(userDetails, {
          onSuccess: (res) => {
            document.cookie = `user_access_token=${res?.data?.token}`;
            toast.success('Login Successfull');
            dispatch(setAuthentication(true));

            dispatch(setUserData(res.data.data.data));
            navigate('/');
          },
          onError: () => {
            toast.error('Something Went wrong ');
          },
        });
      })
      .catch((error) => {
        toast.error('Something Went wrong ');
        console.log(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-[500px]  border border-gray-400 rounded-[30px] pb-8 overflow-hidden'>
        <img
          src={AuthTop}
          alt='image'
          className=' h-[200px] w-full object-cover'
        />
        <div className='flex flex-col items-center gap-4 px-6'>
          <div className='flex flex-col items-center'>
            <h1 className='text-xl font-medium'>Thank you for choosing us </h1>
            <p className='text-sm text-gray-500'>
              Please confirm you have a Registered user account with us.
            </p>
          </div>
          <button
            onClick={handleGoogleLogin}
            type='button'
            className='w-56 flex items-center justify-center gap-4 py-3 px-6 text-sm tracking-wide text-gray-800 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none font-semibold'
            // onClick={handleGoogleLogin}
          >
            {googleLogin.isPending ? (
              <Loader2 className='animate-spin' />
            ) : (
              <>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20px'
                  className='inline'
                  viewBox='0 0 512 512'
                >
                  <path
                    fill='#fbbd00'
                    d='M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z'
                    data-original='#fbbd00'
                  />
                  <path
                    fill='#0f9d58'
                    d='m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z'
                    data-original='#0f9d58'
                  />
                  <path
                    fill='#31aa52'
                    d='m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z'
                    data-original='#31aa52'
                  />
                  <path
                    fill='#3c79e6'
                    d='M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z'
                    data-original='#3c79e6'
                  />
                  <path
                    fill='#cf2d48'
                    d='m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z'
                    data-original='#cf2d48'
                  />
                  <path
                    fill='#eb4132'
                    d='M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z'
                    data-original='#eb4132'
                  />
                </svg>
                Sign up with google
              </>
            )}
          </button>
          <button
            type='button'
            className='w-56 flex items-center justify-center gap-4 py-3 px-6 text-sm tracking-wide text-gray-800 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none font-semibold'
            onClick={() => navigate('/signup')}
          >
            Sign up as Guest
          </button>
          <p className='text-sm text-gray-500 text-center'>
            By signing up, you agree to the{' '}
            <span className='text-blue-500'>Terms of Service</span> and{' '}
            <span className='text-blue-500'>Privacy Policy</span>, as well as
            the <span className='text-blue-500'>Cookie Policy</span>.
          </p>
          <div className='h-[1px] w-full bg-gray-400 ' />
          <p className='text-center text-gray-500'>
            Already have an account?{' '}
            <span
              onClick={() => navigate('/login')}
              className='text-blue-500 cursor-pointer hover:underline'
            >
              Login
            </span>
          </p>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Auth;
