import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import icon1 from '../../assets/shipmenticon.svg';
import icon2 from '../../assets/venicon.svg';
import icon3 from '../../assets/giftboxicon.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setProductDetails } from '@/redux/productDetails.slice';
import { useState } from 'react';

const productDetails = [
  {
    size: '8" x 12"',
    marketPrice: '525',
    ourPrice: '375',
    discount: `Let's Save 40%`,
  },
  {
    size: '18" x 24"',
    marketPrice: '1399',
    ourPrice: '840',
    discount: `Let's Save 40%`,
  },
  {
    size: '24" x 36"',
    marketPrice: '1999',
    ourPrice: '1200',
    discount: `Let's Save 40%`,
  },
  {
    size: '36" x 48"',
    marketPrice: '3499',
    ourPrice: '2400',
    discount: `Let's Save 40%`,
  },
  {
    size: '8" x 12"',
    marketPrice: '525',
    ourPrice: '375',
    discount: `Let's Save 40%`,
  },
  {
    size: '36" x 72"',
    marketPrice: '5999',
    ourPrice: '3800',
    discount: `Let's Save 40%`,
  },
];

const DiscountedProductDetails = () => {
  const paintingTypes = [
    'Canvas Printing',
    'Acrylic Printing',
    'Panoramic Canvas Printing',
    'Sticker Printing',
    'Sticker Label Printing',
    'Sun Board Printing',
    'One-way Vision',
    'Backlit Vinyl Print',
    'Frosted Film Print',
    'Decal Prints',
    'Vinyl Print',
    'Fabric Print',
    'Customized Wallpaper',
    'Personalised Canvas Print',
  ];
  const [artType, setArtType] = useState('Canvas Printing');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigation = (idx) => {
    dispatch(setProductDetails({ artType, ...productDetails[idx] }));
    navigate('/product-details');
  };

  return (
    <div className='flex flex-col items-center lg:items-start lg:flex-row lg:justify-center gap-16 my-20'>
   
      <div className='w-96 h-96 rounded-xl bg-gray-300  flex items-center justify-center'>
        {/* Placeholder image */}
        <p className='text-gray-500'>Image Preview</p>
      </div>

  
      <div className='border-2 p-3 rounded-3xl  bg-white'>
        {/* Select dropdown */}
        <div className='flex justify-end items-center gap-6 pb-6'>
          <p className='text-lg font-semibold'>You have selected</p>
          <select
            onChange={(e) => setArtType(e.target.value)}
            className='px-4 py-2 border-2 border-gray-300 text-base rounded-md'
          >
            {paintingTypes.map((name) => {
              return (
                <option key={name} value={name}>
                  {name}
                </option>
              );
            })}
          </select>
        </div>

        {/* Table content */}
        <div className='border-2 rounded-2xl overflow-hidden'>
          <Table>
            <TableHeader className='bg-blue-600'>
              <TableRow>
                <TableHead className='w-[120px] text-lg text-white font-normal'>
                  {`Size's`}
                </TableHead>
                <TableHead className='text-lg text-white font-normal'>
                  Market Value
                </TableHead>
                <TableHead className='text-lg text-white font-normal'>
                  Our Value
                </TableHead>
                <TableHead className='text-right'></TableHead>
              </TableRow>
            </TableHeader>
          </Table>

          {/* Scrollable Table Body */}
          <div className='overflow-y-auto' style={{ maxHeight: '245px' }}>
            <Table>
              <TableBody>
                {productDetails.map((product, i) => (
                  <TableRow key={product.size} className='px-6 py-1'>
                    <TableCell className='font-bold text-lg text-gray-500 px-5'>
                      {product.size}
                    </TableCell>
                    <TableCell className='line-through text-lg font-semibold text-gray-500'>
                      ₹{product.marketPrice}
                    </TableCell>
                    <TableCell className='font-bold text-lg px-16'>
                      ₹{product.ourPrice}
                    </TableCell>
                    <TableCell className='text-right pr-16'>
                      <button
                        onClick={() => handleNavigation(i)}
                        className='bg-green-500 px-6 py-1 rounded-full text-white flex items-center gap-2'
                      >
                        <span>🔥</span>
                        {product.discount}
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

 
        <div className='flex justify-center mt-5 mb-5'>
          <button className='border border-gray-400 text-black-700 font-semibold px-10 py-2 rounded-full'>
            Add Custom Size
          </button>
        </div>

     
        <div className='flex justify-between items-center text-gray-600 text-sm mt-6 mx-5'>
          <div className='flex flex-col text-center items-center justify-center gap-2'>
            <img src={icon1} alt='icon' style={{width:"40px",height:"45px"}}/>
            <p className='text-lg font-semibold text-center'>
              Shipment in
              <br />
              3-5 Days across India
            </p>
          </div>
          <div className='flex flex-col text-center justify-center items-center gap-2'>
            <img src={icon2} alt='icon' style={{width:"40px",height:"45px"}}/>
            <p className='text-lg font-semibold'>
              Free Delivery
              <br />
              Up to 5000/-
            </p>
          </div>
          <div className='flex flex-col text-center justify-center items-center gap-2'>
            <img src={icon3} alt='icon' style={{width:"40px",height:"45px"}}/>
            <p className='text-lg font-semibold'>
              100% Free
              <br />
              Basic Box Packaging
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountedProductDetails;
