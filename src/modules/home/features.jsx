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
    <section className='h-24 w-full px-4 lg:px-0 space-y-2 py-10 lg:flex items-center justify-around mb-28 lg:mb-0' style={style.section}>
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
    columnGap:'100px',
    justifyContent:'center',
    padding:'80px 0px'
  }
}