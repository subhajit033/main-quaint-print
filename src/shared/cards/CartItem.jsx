import { useEffect, useState } from 'react';
import { updateQuantity, deleteCartItem } from '@/redux/cart.slice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { ApiService } from '@/api/api.service';
/* eslint-disable react/prop-types */
const CartItem = ({ _id, title, price, image, quantity, billing }) => {
  const dispatch = useDispatch();
  const updateCart = ApiService.cartService.useUpdateCart(_id);
  const deleteItem = ApiService.cartService.useDeleteCartItem();
  const handleQuantityChange = async (e) => {
    setQty(e.target.value);

    updateCart.mutate(
      { quantity: e.target.value },
      {
        onSuccess: () => {
          dispatch(updateQuantity({ _id, quantity: e.target.value }));
          toast.success('Quantity Updated Succesfully');
        },
        onError: () => {
          toast.error('Something went wrong');
        },
      }
    );
  };
  const [varPrice, setVarPrice] = useState(price);
  const [qty, setQty] = useState(quantity);

  useEffect(() => {
    setVarPrice(price * qty);
  }, [qty]);

  const removeCartItem = () => {
    deleteItem.mutate(_id, {
      onSuccess: () => {
        dispatch(deleteCartItem(_id));
        toast.success('Item removed sucessfully');
      },
      onError: () => {
        toast.error('Something went wrong');
      },
    });
  };
  return (
    price && (
      <div className='flex w-full items-center space-x-2 sm:space-x-4 p-2 sm:p-4 bg-white rounded-lg shadow border border-gray-300'>
        <div className='w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded-md flex-shrink-0 overflow-hidden'>
          <img
            className='w-full h-full object-cover'
            src={image}
            alt={`${title}_img`}
          />
        </div>
        <div className='flex-grow min-w-0'>
          <h3 className='font-semibold text-sm sm:text-base '>{title}</h3>
          {/* <p className="text-xs sm:text-sm text-gray-600">Size: 20x40in</p> */}
        </div>
        {billing && <p>{quantity}</p>}
        {!billing && (
          <div className='flex items-center space-x-1 sm:space-x-2 flex-shrink-0'>
            <label className='text-xs sm:text-sm'>Qty:</label>
            <select
              onChange={handleQuantityChange}
              className='border rounded px-1 py-0.5 sm:px-2 sm:py-1 text-xs sm:text-sm'
              value={qty}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              {/* Add more options as needed */}
            </select>
          </div>
        )}
        <div className='font-bold text-sm sm:text-base whitespace-nowrap'>{`₹${varPrice}/-`}</div>
        {!billing && (
          <button
            onClick={removeCartItem}
            className='text-gray-400 hover:text-gray-600 flex-shrink-0'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4 sm:h-5 sm:w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        )}
      </div>
    )
  );
};

export default CartItem;
