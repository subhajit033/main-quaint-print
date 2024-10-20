import { logo } from '@/assets/assets';
import { ShoppingCart } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { Phone, MenuIcon, X } from 'lucide-react';
import { Ambulance } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const [isMemuVisible, setIsMenuVisible] = useState(false);
  const userData = useSelector((store) => store.auth.userData);
  const cartItem = useSelector((store) => store.cart.cartItem);
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  const navigate = useNavigate();
  return (
    <nav className='py-0 relative'>
      <div
        style={{
          background:
            'radial-gradient(circle, rgba(147,39,255,1) 9%, rgba(173,0,83,1) 90%)',
        }}
        className='h-10 w-full py-2 flex justify-center items-center'
      >
        <p className='flex items-center  sm:text-left text-center text-sm font-semibold text-gray-200 gap-4'>
          <Ambulance /> With FREESHIPPING, orders of ₹ 5000+ get free shipping
        </p>
      </div>

      <div className='flex justify-between px-2 md:px-16 lg:py-4 lg:justify-around'>
        <h1>
          <Link to={'/'}>
            <img className='w-40' src={logo} alt='logo of quaintprints.com' />
          </Link>
        </h1>
        <div className='hidden lg:flex items-center gap-6 '>
          <Link
            to={'/personalize-print'}
            className='font-semibold text-lg text-black-500'
          >
            Personalize Prints
          </Link>
          <Link
            to={'/artwork-print'}
            className='font-semibold text-lg text-black-500'
          >
            Artwork Print
          </Link>
          <Link
            to={'/other-print'}
            className='font-semibold text-lg text-black-500'
          >
            Other Printing
          </Link>
          <Link
            className='font-semibold text-lg text-black-500'
            target='_blank'
            to={'https://www.veteranmedias.com/'}
          >
            Design Services
          </Link>
        </div>
        <div className='flex items-center gap-8'>
          {/* <div className='leading-tight hidden lg:block'>
            <p className='flex items-center gap-1 text-sm   text-gray-500'>
              <Phone style={styles.phone} /> Just a one call away
            </p>
            <a
              href='tel: +91000000000'
              className='text-blue-600 font-semibold text-lg'
            >
              +91000000000
            </a>
          </div> */}
          <button
            onClick={() => navigate('/dashboard?tab=cart')}
            className='relative'
          >
            {cartItem.length > 0 && (
              <p className='w-4 h-4 p-3 rounded-full bg-blue-500 absolute flex items-center justify-center text-white -top-3 right-0'>
                {cartItem.length}
              </p>
            )}
            <ShoppingCart className='h-8 w-8' />
          </button>
          {isAuthenticated && userData?.avatar ? (
            <img
              onClick={() => navigate('/dashboard?tab=account')}
              className='w-12 h-12 rounded-full cursor-pointer'
              src={userData.avatar}
              alt='profile pic'
            />
          ) : (
            <UserRound
              className='cursor-pointer'
              onClick={() => navigate('/dashboard')}
            />
          )}
          <MenuIcon
            onClick={() => setIsMenuVisible(!isMemuVisible)}
            className='lg:hidden'
          />
          {isMemuVisible && (
            <div className='absolute flex flex-col md:hidden top-20 p-4 w-56 rounded-xl shadow-xl right-0 z-50 bg-white'>
              <X
                onClick={() => setIsMenuVisible(false)}
                className='absolute top-1 right-4'
              />
              <Link className='font-semibold py-2' to={'/personalize-print'}>
                Personalize Prints
              </Link>
              <Link className='font-semibold py-2' to={'/artwork-print'}>
                Artwork Prints
              </Link>
              <Link className='font-semibold py-2' to={'/other-print'}>
                Other Prints
              </Link>
              <Link
                className='font-semibold py-2'
                target='_blank'
                to={'https://www.veteranmedias.com/'}
              >
                Design Services
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;

const styles = {
  phone: {
    width: '18px',
  },
};
