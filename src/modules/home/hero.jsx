// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { contentService } from '@/api/content.service';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Loader2 } from 'lucide-react';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [enabled, setEnabled] = useState(true);
  const url1 =
    'https://beyoung.in/api/catalog/new-bb/mobile/banner/bhuvan-banner-desktop-view124357.jpg';
  const url = [
    'https://beyoung.in/api/catalog/new-bb/desktop/banner/Plain-T-Shirts-banner-desktop-view-home-page01.jpg',
    url1,
  ];
  const { isError, isSuccess, isFetching, data } =
    contentService.useGetBanner(enabled);
  useEffect(() => {
    setEnabled(true);
  }, []);
  useEffect(() => {
    if (isSuccess || isError) {
      setEnabled(false);
      console.log(data);
    }
  }, [isSuccess, isError]);
  if (isFetching) {
    return (
      <div className='flex justify-center'>
        <Loader2 className='animate-spin' />
      </div>
    );
  }
  return (
    <>
      <header>
        {!isFetching && (
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className='mySwiper !w-full'
          >
            {!isFetching &&
              data?.data?.data?.data?.map((src, i) => {
                return (
                  <SwiperSlide className='!h-[80vh]' key={i}>
                    <img
                      className='!w-screen h-[80vh] object-cover'
                      src={src.image}
                      alt='image'
                    />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        )}
      </header>
    </>
  );
};

export default Hero;
