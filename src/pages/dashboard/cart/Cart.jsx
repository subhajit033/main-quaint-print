import CartItem from '@/shared/cards/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { getTotalCartValue } from '@/utils/getTotalCartValue';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import api from '@/api';
import { loadScript } from '@/utils/loadscript';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((store) => store.cart.cartItem);
  const userDetails = useSelector((store) => store.auth.userData);
  const totalCartValue = getTotalCartValue(cartItem);
  const [cartValue, setCartValue] = useState(totalCartValue);
  const [cartIds, setCartIds] = useState([]);
  useEffect(() => {
    setCartValue(getTotalCartValue(cartItem));
  }, [cartItem]);
  const RZP_KEY = import.meta.env.VITE_RAZORPAY_ID;

  useEffect(() => {
    setCartIds(cartItem.map((item) => item._id));
  }, [cartItem]);

  console.log(cartIds);

  async function displayRazorpay() {
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const result = await api.post(`/payments/create-order`, { cartIds });

    if (!result) {
      alert('Server error. Are you online?');
      return;
    }
    console.log(result);

    const { amount, id: order_id, currency } = result.data.data;

    const options = {
      key: RZP_KEY, // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      //name: values.name,

      description: 'Test Transaction',
      image:
        'https://phoenixnsec.in/static/media/logo1.a52d489a9dc1f01e80f6.png',
      order_id: order_id,
      // handler: async function (response) {
      //   const data = {
      //     orderCreationId: order_id,
      //     razorpayPaymentId: response.razorpay_payment_id,
      //     razorpayOrderId: response.razorpay_order_id,
      //     razorpaySignature: response.razorpay_signature,
      //   };

      //   const result = await axios.post(
      //     `${BACKEND_URL}/api/v1/payments/verifypayment`,
      //     data
      //   );
      //   console.log(result);

      //   // alert(result.data.msg);
      // },
      prefill: {
        name: userDetails?.firstName + ' ' + userDetails?.lastName,
        email: userDetails?.email,
      },
      redirect: 'true',
      callback_url: `https://quaint-print-server.onrender.com/api/v1/payments/verify-payment`,
      notes: {
        cartIds: cartIds.join(',').toString(),
        userId: userDetails._id,
      },
      theme: {
        color: '#61dafb',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div>
      <div className='px-2 md:px-24 py-8 space-y-2  border h-96 overflow-scroll'>
        {cartItem.length === 0 ? (
          <h1 className='text-2xl text-gray-400'>No item is in cart</h1>
        ) : (
          cartItem.map((item) => <CartItem key={item._id} {...item} />)
        )}
      </div>
      {cartItem.length > 0 && (
        <div className='flex items-center justify-between'>
          <div>
            <h4 className='text-xl'>Total Cart value</h4>
            <h4 className='text-2xl text-blue-500 font-bold'>{`₹${cartValue} /-`}</h4>
          </div>
          <Button onClick={displayRazorpay} className='bg-blue-500'>
            Pay ₹{cartValue} /-
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
