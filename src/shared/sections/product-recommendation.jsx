import { contentService } from '@/api/content.service';
import ProductCard from '@/shared/cards/ProductCard';
import { useEffect, useState } from 'react';

const ProductPecommendation = () => {
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
    <div className='px-4 lg:px-20 py-20'>
    <div className='flex flex-col items-center gap-5 mb-8'>
      <h1 className='text-5xl font-bold'>
        You May Also Like Our Other Products
      </h1>
      <p className='text-lg font-semibold text-gray-500 text-center lg:w-[45%]'>
        Check out our diverse range of products, including stickers, custom
        wallpapers, and vinyl prints. Enjoy top-quality materials and
        exceptional craftsmanship in every item.
      </p>
    </div>
      {isSuccess && (
        <div className='cardsSection grid grid-cols-1 justify-items-center  lg:grid-cols-4 lg:gap-4 mx-20 gap-10'>
          {data.data.data.data.map((product) => {
            return <ProductCard key={product._id} {...product} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ProductPecommendation;
