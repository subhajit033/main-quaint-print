import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setProductDetails } from '@/redux/productDetails.slice';
const ProductCard = ({ margin, product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { image, title, price } = product;
  const handleClick = () => {
    dispatch(setProductDetails({ ...product }));
    navigate('/product-details');
  };
  return (
    <div
      onClick={handleClick}
      className={`w-[22rem]  rounded-xl overflow-hidden ${
        margin ? 'mx-4' : ''
      }`}
    >
      <img
        className='object-cover rounded-xl w-full h-[21rem] cursor-pointer'
        src={image}
        alt='pdt-img'
      />
      <p className='text-center text-2xl font-semibold cursor-pointer'>
        {title}
      </p>
      <p className='text-center text-2xl font-bold text-blue-600'>{` Starting from ₹${price[0]?.price}`}</p>
    </div>
  );
};

export default ProductCard;
