import { useEffect, useState } from 'react';
import api from '@/api';
import CartItem from '@/shared/cards/CartItem';
import { Loader2 } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import OrderCard from '@/shared/cards/OrderCard';

const Billing = () => {
  const [orderItem, setOrderItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const getCartItems = async () => {
    setLoading(true);
    try {
      const res = await api.get('/users/get-my-orders');

      setLoading(false);
      setOrderItem(res.data.data.data);
      console.log(res.data.data.data);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };
  useEffect(() => {
    getCartItems();
  }, []);
  if (loading) {
    return <Loader2 className='animate-spin' />;
  }
  return (
    <div>
      <div className='px-2 md:px-2 py-8 space-y-2  border md:h-[30rem] overflow-scroll'>
        {orderItem.length === 0 ? (
          <h1 className='text-2xl text-gray-400'>
            You have not purchased anything
          </h1>
        ) : (
          // orderItem.map((item) => (
          //   <CartItem billing={true} key={item._id} {...item.product} />
          // ))
          <Table className='w-full'>
            <TableHeader>
              <TableRow className='bg-blue-200 rounded-lg'>
                <TableHead>Product Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Order Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Order Id</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orderItem.map((item) => {
                return <OrderCard key={item._id} item={item} />;
              })}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default Billing;
