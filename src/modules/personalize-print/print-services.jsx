import { Button } from '@/components/ui/button';
import PrintCard from '@/shared/cards/PrintCard';

const PrintServices = () => {
  return (
    <div className='px-4 lg:px-20 py-10 mx-10'>
      <div className='flex items-end gap-12 mb-8 mx-10'>
        <div className='space-y-2'>
          <h3 className='text-3xl font-medium kalamText'>Personalized Printing Services</h3>
          <h1 className='text-5xl font-bold'>
            Tailored Prints for Every Occasion
          </h1>
          <p className='text-base font-medium text-gray-500 w-full lg:w-[80%]'>
            At Veteran Medias LLP, we specialize in personalized printing,
            offering a range of custom print solutions to meet your unique
            needs. From personalized canvas prints to bespoke acrylic photo
            prints, our services are designed to add a personal touch to your
            home, office, or gifting needs. Whether {`it's`} a cherished memory,
            a favorite quote, or a custom design, our high-quality materials and
            state-of-the-art printing technology ensure that your prints are as
            special as the moments they capture.
          </p>
        </div>
        <Button className='bg-gray-200 text-black text-lg  py-10 px-14 '>Get Started</Button>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-4 my-10 justify-self-center mx-5'>
        {Array(4)
          .fill('-')
          .map((_, i) => {
            return <PrintCard key={i} />;
          })}
      </div>
    </div>
  );
};

export default PrintServices;
