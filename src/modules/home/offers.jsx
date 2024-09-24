import { offer1, offer2 } from '@/assets/assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import deliveryCar from '../../assets/icons/deliveryCar1.png';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';

const Offers = () => {
  const offerImg = [offer1, offer2];
  return (
    <div className='px-0 lg:px-20  lg:my-0'>
      <div className='hidden lg:flex justify-center gap-10'>
        <img className='w-[40rem]' src={offer1} alt='offer1' />
        <img className='w-[40rem]' src={offer2} alt='offer2' />
      </div>
      <div className=' lg:hidden'>
        <Swiper
          spaceBetween={30}
          hashNavigation={{
            watchState: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, HashNavigation]}
          className='mySwiper'
        >
          {offerImg.map((url, i) => {
            return (
              <SwiperSlide key={i} data-hash='slide1'>
                <img className='h-full' src={url} alt='choose us' />;
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <section className='container section-my h-16 w-full border border-[#7000FF] border-dashed bg-[#F1E2FF] rounded-lg flex items-center justify-center my-10'>
        <p className='flex items-center gap-2'>
          <img src={deliveryCar} alt='delivery car' />
          <p className='text-xs md:text-base font-semibold text-black-600'>
            Over <span className='text-[#4B0DFD]'>1.5 thousands</span> items
            shipped every month! Veteran makes them a reality.
          </p>
        </p>
      </section>
    </div>
  );
};

export default Offers;
