import ProductCard from '@/shared/cards/ProductCard';
import Marquee from 'react-fast-marquee';

const CanvasPrintingVariation = () => {
  return (
    <div className='px-4 lg:px-20 py-10'>
      <div className='flex flex-col items-start lg:items-center gap-3 mb-8'>
        <h3 className='kalamText text-4xl'>Canvas Printing variation</h3>
        <h1 className='text-5xl font-bold'>
          Diverse Options for Your Unique Needs
        </h1>
        <p className='text-lg font-semibold text-gray-500 text-center lg:w-[60%]'>
          We offer a variety of canvas printing options to suit any preference
          or occasion. From classic to panoramic and custom designs, our
          high-quality materials and precision craftsmanship ensure stunning
          results every time.
        </p>
      </div>
      {/* <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 place-items-center'>
        {Array(4)
          .fill('-')
          .map((_, i) => {
            return <ProductCard key={i} />;
          })}
      </div> */}
      {/* <div className="lg:hidden">
        <Marquee className="">
        {
            Array(4).fill('_').map((_, i)=>{
                return <ProductCard margin={true} key={i} />
            })
        }
        </Marquee>
      </div> */}
    </div>
  );
};

export default CanvasPrintingVariation;
