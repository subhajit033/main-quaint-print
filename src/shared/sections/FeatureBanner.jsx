import featureCover from '../../assets/featuresCover1.png'

const FeatureBanner = () => {
  return (
    <section className='px-0 container py-10 my-10 lg:my-36 lg:px-0 mb-28'>
      <div className='flex flex-col items-center gap-8 lg:flex-row lg:justify-center lg:items-center lg:gap-8'>
        {/**left side */}
        <div className='flex flex-col gap-4 lg:block lg:space-y-8'>
          <div className='order-2'>
            <p className='text-xl sm:text-3xl text-blue-600 kalamText text-center sm:text-left'>
              Artwork and Digital Illustration Prints
            </p>
            <h1 className='text-2xl sm:text-4xl font-bold text-center sm:text-left'>
              Creative Prints for Every Special Moment and Space
            </h1>
          </div>
          <p className='text-lg text-gray-500 font-semibold leading-tight order-3 w-[100%] text-center sm:text-left'>
            Looking for artwork and digital illustration prints for special
            moments and places like birthdays, office interiors, hospitals,
            cafes, and gardens? {`You've`} come to the right place. Here,{' '}
            {`you'll`} find the best creative prints, paired with top-quality
            frames and artwork, all at an affordable price. Transform your
            spaces with stunning visuals that capture the essence of your unique
            occasions and settings.
          </p>
        </div>
        {/**right side */}
        <div className='order-1'>
          <div className='w-80 h-72 lg:w-[36rem] lg:h-[26rem] relative rounded-xl'>
           <img src={featureCover} alt="features cover image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBanner;
