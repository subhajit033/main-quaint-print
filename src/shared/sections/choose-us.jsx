


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ChooseUsCard from './choose-us-card';
import whychooseusbg from '../../assets/why choose us.svg'

import icon1 from '../../assets/icons/chooseusicon5.svg'
import icon2 from '../../assets/icons/chooseusicon1.svg'
import icon3 from '../../assets/icons/chooseusicon2.svg'
import icon4 from '../../assets/icons/chooseusicon6.svg'
import icon5 from '../../assets/icons/chooseusicon4.svg'
import icon6 from '../../assets/icons/chooseusicon3.svg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';

const ChooseUs = () => {

  return (
  
 <div
        style={{
        padding:"5rem 0rem",
    
       backgroundImage: `url(${whychooseusbg})`,
       
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className={`w-full  lg:h-[67rem]  py-20 space-y-6`}

    >
      {/* <img className='absolute w-full h-full -z-10' src={chooseBg} alt='bg' /> */}
      <p className='flex flex-col gap-2 items-center lg:flex-row lg:justify-center'>
        <p className='text-xl lg:text-5xl font-semibold lg:font-bold'>
          Why Choose
        </p>
        <p className='bg-clip-text text-transparent bg-gradient-to-r from-[#780318] to-[#FF2B6F] text-clip text-2xl lg:text-5xl font-bold'>
          Veteran Medias LLP?
        </p>
      </p>
      <div className='w-full flex justify-center'>
        <p className='text-lg font-semibold text-gray-500 leading-tight text-center lg:w-[62rem]'>
          Lorem ipsum dolor sit amet consectetur. Mi aliquam purus fermentum et
          nec. Mauris augue quisque libero tempus turpis a aliquam sed. Tempus
          libero urna eget et egestas dictum enim odio. Hendrerit cursus lectus
          faucibus in orci a non porta.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: "center", padding: '0rem 1rem' }}>
        <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10  ">
          {/* Card 1 */}
          <ChooseUsCard
            icon={icon1}
            title="Competitive Rates, Best Price Guarantee"
            subtitle="Lowest Price Guaranteed"
            description="As one of the leading printing service providers in India, we offer highly competitive rates. Our 'Best Price Guarantee' ensures that you receive top-quality prints at affordable prices."
          />

          {/* Card 2 */}
          <ChooseUsCard
            icon={icon2}
            title={<>Dedicated Support for <br/> Our Valued Customers</>}
            subtitle="Great Customer Service"
            description={
              <>
                Our dedicated customer care team is always ready to assist you. Reach us at
                &nbsp;<a href="tel:+919372938392" className="text-blue-500 underline font-bold" style={{ color: "#EE2465" }}>
                  +91 93729 38392
                </a> or<br />email us at  &nbsp;
                <a href="mailto:info@veteranmedias.com" className="text-blue-500 underline font-bold" style={{ color: "#EE2465" }}>
                  info@veteranmedias.com
                </a> for any inquiries or support.
              </>
            }
          />

          {/* Card 3 */}
          <ChooseUsCard
            icon={icon3}
            title="Durable, High-Quality Prints"
            subtitle="Long-Lasting Prints"
            description="We use original inks for our canvas prints, guaranteeing a lifespan of over 100 years. Our prints are waterproof, ensuring they remain vibrant and intact for generations."
          />

          {/* Card 4 */}
          <ChooseUsCard
            icon={icon4}
            title="Speedy Delivery Across India"
            subtitle="Lightning Fast Shipping"
            description="At Veteran Medias LLP, we pride ourselves on our quick and reliable shipping. Partnering with leading carriers like FEDEX, we ensure your products are delivered swiftly and safely anywhere in India."
          />

          {/* Card 5 */}
          <ChooseUsCard
            icon={icon5}
            title="Top-Grade, Imported Materials"
            subtitle="Premium Quality Material"
            description="We use only the finest materials, mostly imported, for our canvas, poster, and vinyl prints. The quality of our products is unparalleled, providing you with the best prints possible."
          />

          {/* Card 6 */}
          <ChooseUsCard
            icon={icon6}
            title="Superior Frames for Lasting Art"
            subtitle="Quality Frames"
            description="Our canvas frames are made from imported pine wood, ensuring durability and elegance. Automated machines stretch the canvas perfectly onto the frames."
          />
        </div>
      </div>




      {/* <div className='h-96 lg:hidden'>
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
          {chooseImg.map((url, i) => {
            return (
              <SwiperSlide key={i} data-hash='slide1'>
                <img className='' src={url} alt='choose us' />;
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div> */}
    </div>
  
   
  );
};

export default ChooseUs;
