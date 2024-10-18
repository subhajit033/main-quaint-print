import Hero from '@/modules/home/hero';
import Features from '@/modules/home/features';
import Offers from '@/modules/home/offers';
import BestDeals from '@/modules/home/best-deals';
import BestSelling from '@/modules/home/best-selling';
import FeatureBanner from '@/shared/sections/FeatureBanner';
import ChooseUs from '@/shared/sections/choose-us';
import Clients from '@/modules/home/clients';
import ClientsMvp from '@/shared/sections/ClientsMvp';

const Home = () => {
  return (
    <>
      <Hero />
      <Features/>
      <Offers />
      <BestDeals />
      <div className=' w-full  bg-blue-100  mt-20 2xl:overflow-hidden overflow-y-hidden overflow-x-scroll'>
        <div className="w-[80%] mx-auto flex  text-nowrap  justify-start  xl:justify-center items-center gap-24 xl:gap-12 py-4 "  >
        <div className='!w-fit flex items-center gap-4'>
         <div className='w-5'>
         <img src='printer.png' alt='printer' />
         </div>
          <p className='font-medium text-xl'>OTHER PRINTING</p>
        </div>
        <div className='flex items-center gap-4'>
        <div className='w-5'>
        <img  src='surprise.png' alt='printer' />
        </div>
          <p className='font-medium text-xl'>GIFTING PRINTING</p>
        </div>
        <div className='flex items-center gap-4'>
          <div className='w-5'>
          <img src='canvas.png' alt='printer' />
          </div>
          <p className='font-medium text-xl'>CANVAS PRINTING</p>
        </div>
        <div className='flex items-center gap-4'>
          <div className='w-5'>
          <img src='printer.png' alt='printer' />
          </div>
          <p className='font-medium text-xl'>OTHER PRINTING</p>
        </div>
        <div className='flex items-center gap-4'>
        <div className='w-5'>
        <img  src='surprise.png' alt='printer' />
        </div>
          <p className='font-medium text-xl'>GIFTING PRINTING</p>
        </div>
        <div className='flex items-center gap-4'>
         <div className='w-5'>
         <img  src='canvas.png' alt='printer' />
         </div>
          <p className='font-medium text-xl'>CANVAS PRINTING</p>
        </div>
        </div>
      </div>
      <BestSelling />
      <FeatureBanner />
      <ChooseUs />
      <Clients />
      <ClientsMvp />
    </>
  );
};

export default Home;
