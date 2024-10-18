import ContactUsForm from './contact-us-form';
import party from '../../../assets/png/party.png'
import exp from '../../../assets/icons/sliderimg.png'
import fiasta from '../../../assets/png/fiasta.png'
import arrow from '../../../assets/svg/arrow_left.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import circle from '../../../assets/svg/circle.svg'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';



const GetInTouch = () => {
  return (
    <div className='px-4 py-6  lg:px-20 lg:py-16 bg-[#FBF8FF] w-[100%]'>
      <div className='flex lg:flex-row flex-col-reverse gap-y-12 justify-center items-center lg:justify-between 2xl:w-[70%] xl:w-[80%] lg:w-[90%] w-[95%] mx-auto' >

        <div className='w-full sm:w-[80%] lg:w-[48%]'>
          <ContactUsForm />
        </div>

        <div className='w-[100%] mx-auto sm:w-[80%] lg:w-[48%]  flex flex-col gap-4'>


          <div className='w-100% relative mb-4'>
        
            <p className='flex flex-col gap-y-2  sm:flex-row items-center text-[18px] sm:text-lg !xl:text-left leading-[1.5] !text-center font-semibold px-6 py-4 shadow-[0px_80px_32px_rgba(0,66,153,0.01),_0px_45px_27px_rgba(0,66,153,0.03),_0px_20px_20px_rgba(0,66,153,0.04),_0px_5px_11px_rgba(0,66,153,0.05)] bg-white rounded-full relative z-10 '>
            <span className='sm:text-[32px] text-[24px] leading-[1.5] sm:pr-4'><img src={party} alt="party" /></span> We are providing our services throughout India
            </p>
            <div className="absolute hidden sm:block top-[50%] translate-y-[-50%] left-0 sm:translate-x-[-30%] "> <img src={fiasta} alt="fiasta" /></div>
            <div className="absolute hidden sm:block top-[0%] sm:top-[50%]  sm:translate-y-[-50%] right-[50%] translate-x-[50%] z-[1] sm:right-0 sm:translate-x-[40%] "> <img src={fiasta} alt="fiasta" /></div>
          </div>
     

          <div className='py-[40px] px-[36px] bg-[#84142E] text-white rounded-[30px] relative  '>
            <hgroup className='mb-[30px] relative z-[1]'>
              <h4 className='sm:text-[28px] text-[24px] font-medium leading-[36.4px] mb-[10px]'>Do you need our help?</h4>
              <p className='text-[18px] sm:text-[16px] leading-[23.4px] font-medium rounded-[10px]'>Send your doubt request via email.</p>
            </hgroup>

            <button className='flex items-center bg-[#F9F8FF] text-[#84142E] px-[20px] py-[18px] rounded-[10px] font-medium text-[18px] sm:text-[16px] w-fit relative z-[1] '>
              <div className='mr-4'>
                <img src={arrow} alt="arrow" />
              </div>
              Send Request
            </button>
            <div className="circle absolute bottom-0 right-0 ">
              <img src={circle} alt="circle" />
            </div>
          </div>

          <div className='rounded-[30px] overflow-hidden'>

            <Swiper
              modules={[Pagination]}
              // autoplay={{ delay: 3000, disableOnInteraction: false }} 
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={1}
              style={{width: '100%'}}
            >

              <SwiperSlide >
                <img src={exp} alt='slide-img' className="slider-image" />
              </SwiperSlide>
              <SwiperSlide >
                <img src={exp} alt='slide-img' className="slider-image" />
              </SwiperSlide>
              <SwiperSlide >
                <img src={exp} alt='slide-img' className="slider-image" />
              </SwiperSlide>

            </Swiper>
          </div>

          

        </div>



      </div>
    </div>
  );
};

export default GetInTouch;
