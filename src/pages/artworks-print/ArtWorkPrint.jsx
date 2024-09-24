import { Button } from '@/components/ui/button';
import ArtCard from '@/shared/cards/ArtCard';
import Carousel from 'react-multi-carousel';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { ApiService } from '@/api/api.service';
import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArtWorkPrint = () => {
  const handWorkWrtTypes = [
    'Portrait',
    'Landscape',
    'Abstract',
    'Miniature',
    'Varli painting',
    'Cityscape',
    'Pictorial',
    'Oil Painting',
    'Speritual',
    'Gouache',
  ];
  const digitalArt = [
    'Digital Painting',
    'Vector Art',
    'Digital Photography',
    'AI Art',
    '3D Modeling',
    'Sculpting',
  ];
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
  const [isMounted, setIsMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const urls = [
    'https://plus.unsplash.com/premium_photo-1669050701946-d34455dce075?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1719937206341-38a6392dfdef?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1723920515274-ace3503adad6?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  const { isPending, isError, data, isSuccess } =
    ApiService.productService.useGetAllPdt(isMounted);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {
    if (isSuccess) {
      setIsMounted(false); // Stop further calls
    }
  }, [isSuccess]);
  console.log(data);
  return (
    <div style={{display:"flex" ,flexDirection:"column" ,}}>
      <div className='flex justify-center items-center my-8'>
        <h1 className='w-full lg:w-[40%] text-center text-3xl lg:text-6xl font-semibold'>
          Preserve memories you cherish forever
        </h1>
      </div>

      <div>
        <div className='px-4 lg:px-20'>
          <div className='lg:hidden '>
            <Carousel responsive={responsive} itemClass='p-6'>
              {urls.map((url, i) => {
                return (
                  <img className='rounded-xl' key={i} src={url} alt='images' />
                );
              })}
            </Carousel>
          </div>
          <div className='hidden lg:block mx-8 '>
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
              itemClass='p-4'
            >
              {urls.map((url, i) => {
                return (
                  <img className='rounded-xl' key={i} src={url} alt='images' />
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center my-8 gap-8'>
        <h1 className='lg:w-[60%]  font-bold text-center text-2xl lg:text-5xl text-black-500'>
          Hello artists<br/> Earning money from artwork prints is easy now.
        </h1>
        <p className='text-lg text-gray-600 font-semibold lg:w-[35%] text-center'>
          Earning money from your artwork through printing has never been
          easier. Join us at Veteran Medias LLP and transform your creations
          into profitable prints today!
        </p>
      </div>
      <div className='flex items-center justify-center my-8'>
        <Link
          to={'https://quaintprint-artist.vercel.app/'}
          className='mx-auto bg-gray-200 px-4 py-2 rounded-lg text-gray-500 border-dashed border border-black'
        >
          Upload Your Art
        </Link>
      </div>
      <div className='h-[1px] w-full bg-gray-300 my-4' />
      <div className='flex items-center justify-center my-8 gap-8'>
        <Label className='text-2xl'>Handwork Prints</Label>
        <Switch
          onCheckedChange={() => setIsChecked(!isChecked)}
          checked={isChecked}
        />
        <Label className='text-2xl'>Digital Art Print</Label>
      </div>
      {
        <div style={{display:'flex',flexDirection:"row",justifyContent:"center",gap:"5rem"}}>
          {isChecked
            ? digitalArt.map((name) => {
                return (
                  <div className='flex flex-col  items-center ' key={name}>
                    <div className='w-14 h-14 bg-gray-200 '></div>
                    <p className='text-base font-semibold '>{name}</p>
                  </div>
                );
              })
            : handWorkWrtTypes.map((name) => {
                return (
                  <div className='flex flex-col items-center' key={name}>
                    <div className='w-14 h-14 bg-gray-200'></div>
                    <p className='text-base font-semibold'>{name}</p>
                  </div>
                );
              })}
        </div>
      }
      <div className='grid grid-cols-1 md:grid-cols-2 mt-20  gap-y-5' >
        {isPending ? (
          <Loader2 className='animate-spin w-16 h-16' />
        ) : (
          data?.data?.data?.data.map((product) => (
            <ArtCard key={product._id} {...product} />
          ))
        )}
      </div>
    </div>
  );
};

export default ArtWorkPrint;
