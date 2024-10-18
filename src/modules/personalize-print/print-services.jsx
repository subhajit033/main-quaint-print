import { Button } from '@/components/ui/button';
import PrintCard from '@/shared/cards/PrintCard';


const PrintServices = () => {
  return (
    <div className='px-4 lg:px-20 py-10 mx-2 sm:mx-10'>
      <div className='flex flex-col items-center sm:items-start xl:flex-row  xl:items-center gap-12 mb-8  sm:mx-10 sm:w-[95%] w-[90%] mx-auto'>
        <div className='space-y-2 sm:text-left text-center'>
          <h3 className='text-2xl sm:text-3xl font-medium kalamText'>Personalized Printing Services</h3>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold'>
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
        <Button className='bg-gray-200 text-black  text-lg w-fit  py-10 px-14 '>Get Started</Button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 my-10 justify-self-center mx-4 sm:mx-10 gap-4'>
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
