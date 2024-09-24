import Sidebar from '@/shared/dashboard/sidebar/Sidebar';
import Topbar from '@/shared/dashboard/topbar/Topbar';
import { useSelector, useDispatch } from 'react-redux';
import ProtectedRoute from '@/ProtectedRoute/ProtectedRoute';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EditDetails from '@/pages/dashboard/edit-details/EditDetails';
import Cart from '@/pages/dashboard/cart/Cart';
import Billing from '@/pages/dashboard/billing/Billing';
import { ApiService } from '@/api/api.service';
import { setCartItem } from '@/redux/cart.slice';

import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const DashboardLayout = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cartItem = useSelector((store) => store.cart.cartItem);
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  const { isError, isPending, data, isSuccess, refetch } =
    ApiService.productService.useGetAllCartItem(isMounted);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      setIsMounted(false);
      if (!(cartItem.length > 0)) {
        const cart = data.data.data.data;
        if (cart.length > 0) {
          for (let i = 0; i < cart.length; i++) {
            dispatch(setCartItem({ ...cart[i] }));
          }
        }
      }
    } else if (isError) {
      setIsMounted(false);
    }
  }, [isSuccess, isError]);
  useEffect(() => {
    if (isAuthenticated) {
      refetch();
    }
  }, [isAuthenticated]);

  return (
    <ProtectedRoute>
      <>
        <Topbar />
        <div className='flex'>
          <Sidebar />
          <div className='flex-1 w-full p-1 md:p-6 relative'>
            <Tabs defaultValue='account' className='w-full'>
              <TabsList>
                <TabsTrigger value='account'>Account Setting</TabsTrigger>
                <TabsTrigger className='relative' value='cart'>
                  Your Cart
                  <p className='w-4 h-4 p-3 rounded-full bg-blue-500 absolute flex items-center justify-center text-white -top-3 right-0'>
                    {cartItem.length}
                  </p>
                </TabsTrigger>
                <TabsTrigger value='billing'>Billing</TabsTrigger>
                <TabsTrigger value='notify'>Notifications</TabsTrigger>
              </TabsList>
              <TabsContent className='p-4' value='account'>
                <EditDetails />
              </TabsContent>
              <TabsContent value='cart'>
                <Cart />
              </TabsContent>
              <TabsContent value='billing'>
                <Billing />
              </TabsContent>
            </Tabs>
            {/* <button className='absolute right-52 top-8'>
              {cartItem.length > 0 && (
                <p className='w-4 h-4 p-3 rounded-full bg-blue-500 absolute flex items-center justify-center text-white -top-1 right-0'>
                  {cartItem.length}
                </p>
              )}
              <ShoppingCart className='h-8 w-8' />
            </button> */}
          </div>
        </div>
        <Toaster />
      </>
    </ProtectedRoute>
  );
};

export default DashboardLayout;
