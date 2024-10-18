import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Faq = () => {
  return (
    <div className='px-4 space-y-8 lg:px-20 lg:py-10 mb-20'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='text-3xl sm:text-left text-center sm:text-5xl font-bold'>Frequently ask questions</h1>
        <p className='text-lg text-gray-500 text-center my-4 font-semibold leading-tight lg:w-[60%]'>
          Lorem ipsum dolor sit amet consectetur. Condimentum turpis
          pellentesque tincidunt pellentesque posuere lacus vitae. Tristique
          molestie nulla fringilla sit.
        </p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-4 lg:gap-6 w-[90%] mx-auto'>
        {Array(8)
          .fill('-')
          .map((_, i) => {
            return (
              <Accordion className='w-[100%] ' key={i} type='single' collapsible>
                <AccordionItem value='item-1' className='bg-gray-100 rounded-full'>
                  <AccordionTrigger className=' text-2xl  px-10'>
                    Is it accessible?
                  </AccordionTrigger>
                  <AccordionContent className='px-10'>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
      </div>
    </div>
  );
};
export default Faq;
