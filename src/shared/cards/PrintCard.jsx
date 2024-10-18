import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const PrintCard = () => {
  return (
    <Card className='w-[100%] lg:w-full  mx-auto rounded-3xl '>
      <CardContent className='flex flex-col items-center p-4'>
        <div className='w-full h-48 bg-gray-200 rounded-3xl mb-6' />
        <h2 className='text-2xl font-semibold mb-2'>Canvas Prints</h2>
        <p className='text-center text-base text-muted-foreground  font-medium mb-8'>
          Lorem ipsum dolor sit amet consectetur. Cursus sem fringilla in
          euismod faucibus.
        </p>
        <Button  className='bg-gray-200 w-full text-black text-lg rounded-xl px-9 py-3 hover:bg-gray-400' >
          Read More
        </Button>
      </CardContent>
    </Card>
  );
};

export default PrintCard;
