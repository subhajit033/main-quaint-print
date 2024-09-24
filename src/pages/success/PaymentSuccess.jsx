import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='card bg-white p-10 rounded-lg shadow-md flex flex-col items-center'>
        <div className='flex items-center justify-center w-48 h-48 bg-green-50 rounded-full mb-6'>
          <i className='text-green-500 text-8xl'>✓</i>
        </div>
        <h1 className='text-green-500 font-extrabold text-4xl mb-4'>Success</h1>
        <p className='text-gray-600 text-xl'>
          Your payment has completed
          <br />
          Thank you for shopping with us
        </p>
        <Button
          onClick={() => navigate('/dashboard')}
          className='bg-green-600 hover:bg-green-400 mt-4'
        >
          Go Dashboard
        </Button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
