import { LogOutIcon } from 'lucide-react';

const Topbar = () => {
  return (
    <div
      style={{ backgroundImage: "url('/user-dashboard-top-bar.png')" }}
      className={`w-full h-40  bg-cover bg-no-repeat bg-center `}
    >
      <div className='h-40 w-full flex flex-col justify-center items-center relative md:hidden'>
        <img
          className='w-16 h-16 rounded-full'
          src='https://cdn.vectorstock.com/i/1000v/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg'
          alt='user_avatar'
        />
        <p className='text-white text-xl font-semibold'>Yash Web Design</p>
        <div className='flex text-white gap-2  absolute top-4 right-4 cursor-pointer z-20'>
          <LogOutIcon />
          Logout
        </div>
      </div>
    </div>
  );
};

export default Topbar;
