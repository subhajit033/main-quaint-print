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
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold text-center  '>
          You May Also Like Our Other Products
        </h1>
        <p className='text-lg font-medium text-gray-500 text-center sm:w-[80%]'>
          Check out our diverse range of products, including stickers, custom
          wallpapers, and vinyl prints. Enjoy top-quality materials and
          exceptional craftsmanship in every item.
        </p>
      </div>
      {isSuccess && (
        <div className='cardsSection grid grid-cols-1 justify-items-center sm:grid-cols-2 xl:grid-cols-4 lg:gap-4 sm:mx-20 mx-10 gap-10'>
          {data.data.data.data.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ProductPecommendation;
