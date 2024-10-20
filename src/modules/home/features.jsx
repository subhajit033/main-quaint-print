import { headphone, price_low, truck, refund } from '@/assets/assets';

const Features = () => {
  const feat = [
    {
      image: truck,
      title: 'Free delivery on up to ₹5000+',
    },
    {
      image: refund,
      title: '15 Day money back policy',
    },
    {
      image: headphone,
      title: 'Top-notch Support',
    },
    {
      image: price_low,
      title: 'Low price guarantee',
    },
  ];
  return (
    <section className='h-24 w-full  sm:!py-8 xl:overflow-hidden overflow-y-hidden   space-y-2 py-10 overflow-x-scroll text-nowrap flex items-center justify-start lg:justify-center mb-28 gap-12  xl:gap-24 ' style={style.section}>
      {feat.map((feat, i) => {
        return (
          <p
            key={i}
            className='flex items-center gap-2 text-gray-500 font-semibold'
          >
            <img className='w-5 h-5' src={feat?.image} alt='feat' />
            {feat?.title}
          </p>
        );
      })}

    </section>
  );
};

export default Features;


const style = {
  section:{
  
  
    padding:'100px 0px'
  }
}