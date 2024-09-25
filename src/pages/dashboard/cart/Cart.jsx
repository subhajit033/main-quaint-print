import CartItem from '@/shared/cards/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { getTotalCartValue } from '@/utils/getTotalCartValue';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import api from '@/api';
import { loadScript } from '@/utils/loadscript';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((store) => store.cart.cartItem);
  const userDetails = useSelector((store) => store.auth.userData);
  const totalCartValue = getTotalCartValue(cartItem);
  const [cartValue, setCartValue] = useState(totalCartValue);
  const [isDia1Open, setIsDia1Open] = useState(false);
  const [isDia2Open, setIsDia2Open] = useState(false);
  const [address, setAddress] = useState();
  const [cartIds, setCartIds] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    setCartValue(getTotalCartValue(cartItem));
  }, [cartItem]);
  const RZP_KEY = import.meta.env.VITE_RAZORPAY_ID;

  useEffect(() => {
    setCartIds(cartItem.map((item) => item._id));
  }, [cartItem]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  console.log(cartIds);

  async function displayRazorpay(e) {
    e.preventDefault();
    // e.preventDefault();
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
      callback_url: `http://localhost:3000/api/v1/payments/verify-payment`,
      notes: {
        cartIds: cartIds.join(',').toString(),
        userId: userDetails._id,
        address: JSON.stringify(address),
      },
      theme: {
        color: '#61dafb',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  useEffect(() => {
    setAddress({ ...userDetails?.address });
  }, [isChecked]);

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
          <Button onClick={() => setIsDia1Open(true)} className='bg-blue-500'>
            Checkout
          </Button>
        </div>
      )}
      <Dialog open={isDia1Open}>
        <DialogContent className='max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]'>
          <DialogHeader>
            <DialogTitle>Confirm Your Address?</DialogTitle>
            <DialogDescription>
              {userDetails?.address ? (
                <div className='flex items-center space-x-2'>
                  <Checkbox
                    id='terms'
                    checked={isChecked}
                    onCheckedChange={() => setIsChecked(!isChecked)}
                  />
                  <label
                    htmlFor='terms'
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                  >
                    Use address which is on Your Profile
                  </label>
                </div>
              ) : (
                <p>
                  You have not update you address detail , please fill the below
                  details
                </p>
              )}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsDia1Open(false), setIsDia2Open(true);
                }}
                className='my-4'
              >
                <p className='font-semibold text-gray-500'>Address</p>
                <div className='grid grid-cols-1 md:grid-cols-6 gap-4 items-center'>
                  <div className='grid col-span-2 w-full max-w-sm items-center gap-1.5'>
                    <Input
                      type='text'
                      id='address1'
                      placeholder='Address Line 1'
                      required
                      value={address?.addressLine1}
                      onChange={handleChangeInput}
                      name='addressLine1'
                    />
                  </div>
                  <div className='grid w-full col-span-2 max-w-sm items-center gap-1.5'>
                    <Input
                      type='text'
                      placeholder='Address Line 2'
                      onChange={handleChangeInput}
                      value={address?.addressLine2}
                      name='addressLine2'
                    />
                  </div>
                  <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Input
                      type='text'
                      required
                      placeholder='City'
                      onChange={handleChangeInput}
                      value={address?.city}
                      name='city'
                    />
                  </div>
                  <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Input
                      type='text'
                      placeholder='State'
                      onChange={handleChangeInput}
                      value={address?.state}
                      required
                      name='state'
                    />
                  </div>
                  <div className='grid  w-full max-w-sm items-center gap-1.5'>
                    <Input
                      type='text'
                      required
                      placeholder='Zip/Postal Code'
                      onChange={handleChangeInput}
                      value={address?.zipCode}
                      name='zipCode'
                    />
                  </div>
                  <div className='grid grid-cols-1 w-full max-w-sm items-center gap-1.5'>
                    <Input
                      type='text'
                      required
                      placeholder='Country'
                      onChange={handleChangeInput}
                      value={address?.country}
                      name='country'
                    />
                  </div>
                </div>
                <DialogFooter className='sm:justify-start mt-4'>
                  <Button
                    onClick={() => setIsDia1Open(false)}
                    type='button'
                    className='bg-red-500 hover:bg-red-400'
                  >
                    Close
                  </Button>
                  <Button type='submit'>{'Proceed ->'}</Button>
                </DialogFooter>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      {/**Dialog 2 */}
      <Dialog open={isDia2Open}>
        <DialogContent className='max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]'>
          <DialogHeader>
            <DialogTitle>Details At glance</DialogTitle>
            <DialogDescription>
              <div className='flex justify-between items-start'>
                {/**Adress Summary */}
                <div className='text-black'>
                  <h1 className='text-xl font-semibold'>Delivery Details</h1>
                  <p>{`${userDetails?.firstName} ${userDetails?.lastName}`}</p>
                  <p>{address?.addressLine1}</p>
                  {address?.addressLine2 && <p>{address?.addressLine2}</p>}
                  <p>{`${address?.city} , ${address?.state} , ${address?.zipCode}`}</p>
                  <p>{`${address?.country}`}</p>
                </div>
                {/**Order Summary */}
                <div className='space-y-1 text-black font-semibold'>
                  <h1 className='text-xl font-semibold'>Order Summary:</h1>
                  {cartItem.map((item, i) => {
                    return (
                      <p key={i}>
                        {`₹${item?.price} X ${item.quantity} = ₹${
                          Number(item?.price) * Number(item?.quantity)
                        }`}
                      </p>
                    );
                  })}
                  {/* <p>1500 X 2 = 3000</p>
                  <p>1500 X 2 = 3000</p>
                  <p>1500 X 2 = 3000</p> */}
                  <div className='h-[2px] w-full bg-black' />
                  <p className='text-xl font-semibold text-blue-500'>
                    Total Value = ₹{cartValue}
                  </p>
                </div>
              </div>
              <div className='space-y-2 mt-2'>
                {cartItem.map((item, i) => {
                  return <CartItem key={i} billing={true} {...item} />;
                })}
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className='sm:justify-start mt-4'>
            <Button
              onClick={() => setIsDia2Open(false)}
              type='button'
              className='bg-red-500 hover:bg-red-400'
            >
              Close
            </Button>
            <Button
              onClick={(e) => {
                setIsDia2Open(false), displayRazorpay(e);
              }}
              type='button'
            >
              {`Pay ₹${totalCartValue}`}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Cart;
