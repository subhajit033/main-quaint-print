/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
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

const OrderCard = ({ item }) => {
  const imageUrl = item?.product?.image;
  return (
    <TableRow>
      <TableCell>
        {item?.product?.image && (
          <img
            className='h-16 w-16 rounded-lg'
            src={item?.product?.image}
            alt='image'
          />
        )}
      </TableCell>
      <TableCell>{item?.product?.title}</TableCell>
      <TableCell>
        {new Date(item?.createdAt).toLocaleString('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </TableCell>
      <TableCell>{item?.status}</TableCell>
      <TableCell>{item?.orderId}</TableCell>
      <TableCell>{item?.product?.quantity}</TableCell>
      <TableCell>₹{item?.product?.price}</TableCell>
    </TableRow>
  );
};

export default OrderCard;
