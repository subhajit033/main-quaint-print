import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from '@/shared/cards/ProductCard';
import { contentService } from '@/api/content.service';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BestDeals = () => {
  const [enabled, setEnabled] = useState(false);
  const { isPending, isSuccess, isError, data, fetchStatus } =
    contentService.useGetBestDeals(enabled);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  useEffect(() => {
    if (isSuccess || isError) {
      setEnabled(false);
    }
  }, [isSuccess, isError]);

  useEffect(() => {
    setEnabled(true);
  }, []);

  return (
    <section className='px-4 lg:px-[10rem]'>
      <div className='lg:hidden '>
        {isSuccess && (
          <Carousel responsive={responsive} itemClass='p-6'>
            {data.data.data.data.map((product) => {
              return <ProductCard key={product._id} {...product} />;
            })}
          </Carousel>
        )}
      </div>
      <div className='lg:block cardsSection'>
        {isSuccess && (
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            // ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this.props.deviceType !== 'mobile' ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition='all .5'
            transitionDuration={500}
            containerClass='carousel-container'
            removeArrowOnDeviceType={['tablet', 'mobile']}
            // deviceType={this.props.deviceType}
            dotListClass='custom-dot-list-style'
            itemClass='p-16'
          >
            {data.data.data.data.map((product) => {
              return <ProductCard key={product._id} {...product} />;
            })}
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default BestDeals;
