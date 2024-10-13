import Hero from '@/modules/home/hero';
import Features from '@/modules/home/features';
import Offers from '@/modules/home/offers';
import BestDeals from '@/modules/home/best-deals';
import BestSelling from '@/modules/home/best-selling';
import FeatureBanner from '@/shared/sections/FeatureBanner';
import ChooseUs from '@/shared/sections/choose-us';
import Clients from '@/modules/home/clients';
import ClientsMvp from '@/shared/sections/ClientsMvp';
import Marquee from 'react-fast-marquee';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Offers />
      <BestDeals />
      <div className='flex w-screen overflow-x-auto md:overflow-x-hidden md:w-full  justify-center items-center gap-12 bg-blue-100 py-4 mt-20'>
        <Marquee>
          <div className='flex items-center gap-4 mx-8'>
            <img className='w-10 h-10' src='printer.png' alt='printer' />
            <p className='font-medium text-xl'>OTHER PRINTING</p>
          </div>
          <div className='flex items-center gap-4 mx-8'>
            <img className='w-10 h-10' src='surprise.png' alt='printer' />
            <p className='font-medium text-xl'>GIFTING PRINTING</p>
          </div>
          <div className='flex items-center gap-4 mx-8'>
            <img className='w-10 h-10' src='canvas.png' alt='printer' />
            <p className='font-medium text-xl'>CANVAS PRINTING</p>
          </div>
          <div className='flex items-center gap-4 mx-8'>
            <img className='w-10 h-10' src='printer.png' alt='printer' />
            <p className='font-medium text-xl'>OTHER PRINTING</p>
          </div>
          <div className='flex items-center gap-4 mx-8'>
            <img className='w-10 h-10' src='surprise.png' alt='printer' />
            <p className='font-medium text-xl'>GIFTING PRINTING</p>
          </div>
          <div className='flex items-center gap-4 mx-8'>
            <img className='w-10 h-10' src='canvas.png' alt='printer' />
            <p className='font-medium text-xl'>CANVAS PRINTING</p>
          </div>
        </Marquee>
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
