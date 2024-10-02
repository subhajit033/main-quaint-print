import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ShoppingCart, Loader2 } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { ApiService } from '@/api/api.service';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '@/api';
import { setCartItem } from '@/redux/cart.slice';

const ProductData = () => {
  // const sizeOptions = ['8 x 12', '10 x 14', '12 x 16', '14 x 18'];

  const productDetails = useSelector((store) => store.product.productDetails);
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  const uploadAsset = ApiService.uploadService.useUploadAsset();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState('');
  const [priceDetails, setPriceDetails] = useState(productDetails.price[0]);
  // const [size, setSize] = useState(
  //   productDetails.size ? productDetails.size : ''
  // );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!productDetails) {
    navigate('/');
    return;
  }

  const handleUploadasset = (e) => {
    const upload = new FormData();
    const file = e.target.files[0];
    const warnSize = 2 * 1024 * 1024;
    if (file.size < warnSize) {
      toast.error(
        'Your file size is less than 2mb, for better art quality we recommended to select a higher resolution file'
      );
    }
    upload.append('uploadArt', file);
    uploadAsset.mutate(upload, {
      onSuccess: (data) => {
        toast.success('Image processed successfully');
        setImageUrl(data.data.url);
      },
      onError: (e) => {
        console.log(e);
        toast.error('Image processing failed , try again!');
      },
    });
  };

  if (!productDetails) {
    return;
  }

  const handleAddToCart = async () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    if (!imageUrl || !priceDetails?.size) {
      toast.error('Image url or size is missing , please select');
      return;
    }

    try {
      const res = await api.post(`/users/add-to-cart`, {
        title: productDetails?.title,
        price: priceDetails?.price,
        image: imageUrl,
        size: priceDetails?.size,
      });
      console.log(res);

      const { _id, image, title, price, size } = res.data.data.data;
      dispatch(setCartItem({ _id, title, image, price, quantity: 1, size }));
      toast.success('Item added to cart');
    } catch (error) {
      console.log(error);
    }
  };

  const handleSizeChange = (sizeValue) => {
    console.log('handle size chan');
    setPriceDetails(
      productDetails?.price?.filter((data, i) => data?.size === sizeValue)[0]
    );
  };

  console.log(priceDetails);

  return (
    <div className='flex flex-col items-center md:flex-row md:items-start justify-center gap-8 my-16'>
      {/**Upload part */}
      <div>
        <div>
          <div className='w-96 h-80 lg:w-[40rem] lg:h-[32rem] bg-gray-100 flex justify-center items-center rounded-md relative'>
            {!imageUrl && `Uploaded Image will be displayed here`}
            {uploadAsset.isPending && <Loader2 className='animate-spin' />}
            {imageUrl && (
              <img
                src={imageUrl}
                className='absolute w-full h-full object-cover'
                alt='product image'
              />
            )}
          </div>
        </div>
        <div className='w-full flex justify-center mt-8'>
          <label
            htmlFor='product_image'
            className='w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue'
          >
            <svg
              className='w-8 h-8'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z' />
            </svg>
            <span className='mt-2 text-base leading-normal'>Select a file</span>
            <input
              onChange={handleUploadasset}
              type='file'
              id='product_image'
              className='hidden'
              accept='image/*'
            />
          </label>
        </div>
      </div>
      {/**Product details */}
      <div className='space-y-6 ml-4 md:ml-0'>
        <h1 className='text-3xl text-gray-500'>{productDetails.title}</h1>
        {/**About item */}
        <div className='ml-8'>
          <h3 className='text-xl'>About this item</h3>
          <ul className='list-disc'>
            {productDetails?.aboutItem.map((item, i) => {
              return <li key={i}>{item}</li>;
            })}
          </ul>
        </div>
        <div>
          <h3 className='mb-2'>Size(Inches)</h3>
          <RadioGroup
            defaultValue={priceDetails?.size}
            className='flex gap-6'
            onValueChange={(value) => handleSizeChange(value)}
          >
            {productDetails?.price?.map((data, i) => {
              return (
                <div key={i} className='flex items-center space-x-2'>
                  <RadioGroupItem value={data?.size} id={i} />
                  <Label htmlFor={i}>{data?.size}</Label>
                </div>
              );
            })}
          </RadioGroup>
        </div>
        {/**Product details */}
        <div>
          <p>
            <span className='font-semibold'>Item weight</span> :{' '}
            <span className='text-gray-400'>{productDetails?.itemWeight}</span>
          </p>
          <p>
            <span className='font-semibold'>Material</span> :{' '}
            <span className='text-gray-400'>{productDetails?.material}</span>
          </p>
          <p>
            <span className='font-semibold'>Texture</span> :{' '}
            <span className='text-gray-400'>{productDetails?.texture}</span>
          </p>
        </div>
        <div className='flex items-end gap-8'>
          <div>
            <div className='flex items-center gap-4'>
              <p className='text-xl font-semibold text-blue-500'>
                ₹{priceDetails?.price}/-
              </p>
              <p className='text-xl font-semibold line-through'>
                ₹{priceDetails?.marketPrice}/-
              </p>
            </div>
            <p>Free Shipping</p>
          </div>
          <button className='text-red-600 border border-red-600 py-2 px-4 rounded-md'>
            Limited time deal
          </button>
        </div>
        {/** */}
        <div className='flex items-center gap-8'>
          <button
            onClick={handleAddToCart}
            className='flex items-center gap-4 py-2 px-4 font-semibold text-blue-500 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300'
          >
            Add to cart
            <ShoppingCart />
          </button>
          <button
            onClick={handleAddToCart}
            className='flex items-center gap-4 py-2 px-4 font-semibold text-white border bg-blue-500  border-blue-500 rounded-md hover:bg-white hover:text-blue-500 transition-all duration-300'
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductData;
