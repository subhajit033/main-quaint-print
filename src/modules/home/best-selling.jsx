import { contentService } from '@/api/content.service';
import ProductCard from '@/shared/cards/ProductCard';
import { useEffect, useState } from 'react';

const BestSelling = () => {
  const [enabled, setEnabled] = useState(false);
  const { isPending, isSuccess, isError, data } =
    contentService.useGetBestSeller(enabled);

  useEffect(() => {
    if (isSuccess || isError) {
      setEnabled(false);
    }
  }, [isSuccess, isError]);

  useEffect(() => {
    setEnabled(true);
  }, []);
  return (
    <div className='px-20 mt-20  pt-10'>
      <div className='my-8 '>
        <h1 className='text-5xl mb-4 font-semibold text-center'>
          Best Selling Product
        </h1>
        <p className='text-2xl text-center text-gray-400'>Lorem Ipsum dolar</p>
      </div>
      {isSuccess && (
        <div className='cardsSection grid grid-cols-1 justify-items-center  lg:grid-cols-4 lg:gap-y-8 mx-12'>
          {data.data.data.data.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })}
        </div>
      )}
    </div>
  );
};

export default BestSelling;
