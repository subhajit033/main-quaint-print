/* eslint-disable react/prop-types */
import { Label } from '@/components/ui/label';
import { useSelector, useDispatch } from 'react-redux';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useNavigate } from 'react-router-dom';
import api from '@/api';
import { useEffect, useState } from 'react';
import { deleteCartItem, setCartItem } from '@/redux/cart.slice';
import toast from 'react-hot-toast';

const ArtCard = ({
  title,
  _id,
  paintingThought,
  picture,
  price,
  paintingType,
}) => {
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  const cartItem = useSelector((store) => store.cart.cartItem);
  const [size, setSize] = useState(price[0]?.size);
  const [productPrice, setProductPrice] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isPresentInCart = cartItem.some((item) => item.title === title);
  const artTitle = title;
  const artPrice = price;
  console.log(paintingType);
  const handlePrice = () => {
    setProductPrice(price.filter((data) => data.size === size)[0]?.price);
    console.log(price.filter((data) => data.size === size));
  };
  const addToCart = async (isOrder) => {
    if (!isAuthenticated) {
      navigate('/auth');
      return;
    }

    if (isPresentInCart) {
      toast.success(`${title} already added to cart`);
      return;
    }
    if (!size) {
      toast.error('Please select a size');
      return;
    }

    try {
      const res = await api.post(`/users/add-to-cart/`, {
        title: artTitle,
        image: picture,
        price: productPrice,
        paintingType,
        size,
      });

      const { _id, image, title, price } = res.data.data.data;
      dispatch(setCartItem({ _id, title, image, price, size, quantity: 1 }));
      toast.success(
        isOrder
          ? `${title} added to cart , Please checkout to cart for order`
          : `${title} added to cart successfuly`
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handlePrice();
  }, [size]);
  return (
    <div className='bg-white w-[85%]  rounded-3xl p-4 md:p-4 border border-gray-200 max-w-4xl'>
      <div className='flex flex-col md:flex-row'>
        {/* Image and Oil Painting tag */}
        <div className='relative md:w-[45%] aspect-square bg-gray-200 rounded-2xl mb-4 md:mb-0 md:mr-6'>
          {/* <div className='absolute top-4 left-4 bg-white rounded-full px-3 py-1 text-sm'>
            Oil Painting
          </div> */}
          <button
            onClick={() => addToCart(false)}
            className='absolute top-4 right-4 text-gray-600'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className={`h-6 w-6 ${isPresentInCart ? 'text-red-600' : ''}`}
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
              />
            </svg>
          </button>
          <img
            className='w-full h-full object-cover  rounded-3xl'
            src={picture}
            alt={title}
          />
        </div>

        {/* Product details */}
        <div className='md:w-[45%] mt-8'>
          <h2 className='text-2xl font-bold mb-2'>Title:-{title}</h2>

          <div className='mb-4'>
            <p className='mb-2 text-lg font-semibold'>Recommended sizes:</p>
            <RadioGroup
              onValueChange={(value) => setSize(value)}
              className='flex'
              defaultValue={size}
            >
              {price?.map((data, i) => {
                return (
                  <div key={data._id} className='flex items-center space-x-2'>
                    <RadioGroupItem value={data.size} id={`r${i + 1}`} />
                    <Label htmlFor={`r${i + 1}`}>{data.size}</Label>
                  </div>
                );
              })}
            </RadioGroup>
          </div>

          <p className='text-black-600 font-semibold  text-base  md:h-36'>
            {paintingThought}
          </p>

          <div className='flex items-end justify-between'>
            <span className='text-4xl text-red-500  font-bold'>{`₹ ${productPrice}/-`}</span>
            <button
              onClick={() => addToCart(true)}
              className='bg-gray-200 text-lg font-semibold text-black px-8 py-3 rounded-lg'
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtCard;
