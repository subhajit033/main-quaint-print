import { MapPin } from 'lucide-react';
import { useSelector } from 'react-redux';
import { LogOutIcon } from 'lucide-react';
import api from '@/api';
const Sidebar = () => {
  const userData = useSelector((store) => store.auth.userData);
  const logout = async () => {
    try {
      const res = await api.get('/users/logout');
      window.location.href = '/auth';
    } catch (e) {
      console.log('');
    }
  };
  return (
    <div className='w-96 h-[38rem] border border-gray-500 p-4 md:flex flex-col items-center relative -top-10 bg-white rounded-xl gap-3 hidden '>
      {userData?.avatar ? (
        <img
          className='w-40 h-40 rounded-full object-cover absolute -top-20'
          src={userData?.avatar}
          alt='user_avatar'
        />
      ) : (
        <img
          className='w-40 h-40 rounded-full object-cover absolute -top-20'
          src='/user_avatar.png'
          alt='user_avatar'
        />
      )}
      <img
        className='w-20 h-20 rounded-full object-cover invisible'
        src='https://s3-alpha-sig.figma.com/img/0ee8/b170/27e8d5123f4da0321de004320740c7dc?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TVAZRV2C0A4ExT8dMi~pG~QJ4-m7jd7N3O-b9NgKfk4F7eAGtQrimIv0u7cqSgNNQR-w-kzEPq2iWsCuV0BlefjERhLZx8gimn1fQrNb5uyzbtG9y3hJ4iyNsLgSTngIw1JJ0qB~I20Aw-Vj0r5pWS7kkJ8KIx03BUV9n-9NsMz4iAUBPjZ7mSlIH~dgjZsCtmReGQCXZO1y6LETh8tj3VQe8im38iyF67OLTGUfWhFzGj0LQ08Utk7VoayBLpRxpWc6oy~GzOq-fqWtBLMejdlJVF5WDeH-NtcJcXPEBjCb1zzG~j0C7DsTK3IFutcjAEYkMHopoqCbDt8B1raAhA__'
        alt='user_avatar'
      />
      <p className='text-2xl font-bold'>{`${userData.firstName} ${userData.lastName}`}</p>
      {/* <p className='flex items-center gap-2 text-sm text-gray-500'>
        <MapPin /> Nashik, India
      </p> */}
      {/* <div className='w-full flex items-center justify-between'>
        <Link to={`/edit`}>
          <button className='flex items-center gap-4 border-2 border-gray-300 px-6 py-2 rounded-full text-blue-600 font-semibold bg-blue-100'>
            <PencilLine /> Edit Profile
          </button>
        </Link>
        <Link to={`/upload-art`}>
          <button className='flex items-center gap-4 border-2 border-gray-300 px-6 py-2 rounded-full text-blue-600 font-semibold bg-blue-100'>
            <CloudUpload /> Upload Art
          </button>
        </Link>
      </div> */}
      <div className='w-full my-8'>
        <div className='w-full flex justify-between items-center'>
          <p>Total Prints Uploaded</p>
          <p>160</p>
        </div>

        <div className='w-full flex justify-between items-center'>
          <p>Prints Approved</p>
          <p>160</p>
        </div>
        <div className='w-full flex justify-between items-center'>
          <p>Print Sales</p>
          <p>160</p>
        </div>
      </div>
      {/* <div className='w-full p-4 border-2 border-gray-500 rounded-lg  text-gray-600'>
        <p>Bank Details</p>
        <p>HDFC Thete Nagar, Nashik</p>
      </div> */}
      <div className='w-full p-4 border-2 border-gray-500 rounded-lg'>
        <h4 className='font-semibold border-b border-gray-500 pb-2'>
          Check Payment Status
        </h4>
        <div className='my-2'>
          <p>Lorem Ipsum</p>
          <p className='text-sm text-gray-500'>Lorem Ipsum</p>
        </div>
      </div>
      <div
        onClick={logout}
        className='flex items-center gap-4 border py-2 px-4 text-white bg-red-600 rounded-lg cursor-pointer hover:opacity-70'
      >
        <LogOutIcon /> <span>Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
