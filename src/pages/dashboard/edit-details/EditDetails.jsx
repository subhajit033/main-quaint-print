import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Save } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { ApiService } from '@/api/api.service';
import { setUserData } from '@/redux/auth.slice';

const EditDetails = () => {
  const [artistData, setArtistData] = useState({
    address: {},
    bankDetails: {},
  });
  const userData = useSelector((store) => store.auth.userData);
  const updateArtistData = ApiService.userService.useUpdateUserDetails();
  const uploadAsset = ApiService.uploadService.useUploadAsset();
  const dispatch = useDispatch();

  // console.log(artistData);

  const handleUploadasset = (e, field) => {
    const upload = new FormData();
    upload.append('uploadArt', e.target.files[0]);
    uploadAsset.mutate(upload, {
      onSuccess: (data) => {
        toast.success('Image processed successfully');
        if (field === 'avatar') {
          setArtistData({ ...artistData, avatar: data.data?.url });
        } else {
          setArtistData({
            ...artistData,
            bankDetails: {
              ...artistData.bankDetails,
              checkBook: data?.data?.url,
            },
          });
        }
      },
      onError: (e) => {
        console.log(e);
        toast.error('Image processing failed , try again!');
      },
    });
  };
  const handleArtistProfile = (e, field) => {
    const { name, value } = e.target;
    if (field === 'personal') {
      setArtistData({ ...artistData, [name]: value });
    } else if (field === 'address') {
      setArtistData({
        ...artistData,
        address: { ...artistData.address, [name]: value },
      });
    } else if (field === 'bank') {
      setArtistData({
        ...artistData,
        bankDetails: { ...artistData.bankDetails, [name]: value },
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateArtistData.mutate(artistData, {
      onSuccess: (res) => {
        toast.success('Details Updated Successfully');
        dispatch(setUserData(res.data.data.data));
      },
      onError: (error) => {
        console.log(error);
        toast.error(error?.response?.data?.message);
      },
    });
  };

  useEffect(() => {
    setArtistData(userData);
  }, [userData]);
  return (
    <div className='pt-4'>
      <form onSubmit={handleFormSubmit}>
        {/**Personal Details */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='name'>First Name</Label>
            <Input
              onChange={(e) => handleArtistProfile(e, 'personal')}
              type='text'
              id='name'
              name='firstName'
              required
              placeholder='Fisrt name'
              value={artistData?.firstName}
            />
          </div>
          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='name'>Last Name</Label>
            <Input
              onChange={(e) => handleArtistProfile(e, 'personal')}
              type='text'
              id='name'
              name='lastName'
              required
              value={artistData?.lastName}
              placeholder='Last name'
            />
          </div>

          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='artistname'>Profile Picture</Label>
            <Input
              onChange={(e) => handleUploadasset(e, 'avatar')}
              type='file'
              accept='image/*'
              id='artistname'
              required
            />
          </div>
          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='email'>Email</Label>
            <Input
              onChange={(e) => handleArtistProfile(e, 'personal')}
              type='email'
              id='email'
              name='email'
              required
              placeholder='Email'
              value={userData?.email}
              disabled={userData?.email ? true : false}
            />
          </div>
          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='contact'>Contact No</Label>
            <Input
              onChange={(e) => handleArtistProfile(e, 'personal')}
              type='text'
              id='contact'
              name='contactNo'
              value={artistData?.contactNo}
              placeholder='Contact No'
              required
            />
          </div>
          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='alt-contact'>Alternate Contact No.</Label>
            <Input
              onChange={(e) => handleArtistProfile(e, 'personal')}
              type='text'
              id='alt-contact'
              name='altContactNo'
              placeholder='Alternate contact no'
            />
          </div>
        </div>
        {/**address */}
        <div className='my-4'>
          <p className='font-semibold text-gray-500'>Address</p>
          <div className='grid grid-cols-1 md:grid-cols-6 gap-4 items-center'>
            <div className='grid col-span-2 w-full max-w-sm items-center gap-1.5'>
              <Input
                onChange={(e) => handleArtistProfile(e, 'address')}
                type='text'
                id='address1'
                value={artistData?.address?.addressLine1}
                placeholder='Address Line 1'
                required
                name='addressLine1'
              />
            </div>
            <div className='grid w-full col-span-2 max-w-sm items-center gap-1.5'>
              <Input
                onChange={(e) => handleArtistProfile(e, 'address')}
                type='text'
                placeholder='Address Line 2'
                value={artistData?.address?.addressLine2}
                name='addressLine2'
              />
            </div>
            <div className='grid w-full max-w-sm items-center gap-1.5'>
              <Input
                onChange={(e) => handleArtistProfile(e, 'address')}
                type='text'
                required
                value={artistData?.address?.city}
                placeholder='City'
                name='city'
              />
            </div>
            <div className='grid w-full max-w-sm items-center gap-1.5'>
              <Input
                onChange={(e) => handleArtistProfile(e, 'address')}
                type='text'
                placeholder='State'
                value={artistData?.address?.state}
                required
                name='state'
              />
            </div>
            <div className='grid  w-full max-w-sm items-center gap-1.5'>
              <Input
                onChange={(e) => handleArtistProfile(e, 'address')}
                type='text'
                required
                value={artistData?.address?.zipCode}
                placeholder='Zip/Postal Code'
                name='zipCode'
              />
            </div>
            <div className='grid grid-cols-1 w-full max-w-sm items-center gap-1.5'>
              <Input
                onChange={(e) => handleArtistProfile(e, 'address')}
                type='text'
                required
                value={artistData?.address?.country}
                placeholder='Country'
                name='country'
              />
            </div>
          </div>
        </div>
        <div className='w-full h-[1px] bg-gray-400' />
        {/** bank Details*/}
        {/* <div className='my-4'>
          <p className='font-semibold text-gray-500'>Account Details</p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='grid w-full max-w-sm items-center gap-1.5'>
              <Input
                onChange={(e) => handleArtistProfile(e, 'bank')}
                type='text'
                value={artistData?.bankDetails?.accountNo}
                placeholder='Account No'
                name='accountNo'
              />
            </div>
            <div className='grid w-full max-w-sm items-center gap-1.5'>
              <Input
                onChange={(e) => handleArtistProfile(e, 'bank')}
                type='text'
                value={artistData?.bankDetails?.ifscCode}
                placeholder='IFSC code'
                name='ifscCode'
              />
            </div>
            <div className='grid w-full max-w-sm items-center gap-1.5'>
              <Input
                onChange={(e) => handleArtistProfile(e, 'bank')}
                type='text'
                value={artistData?.bankDetails?.accountHolderName}
                placeholder='Account Holder Name'
                name='accountHolderName'
              />
            </div>
            <div className='grid w-full max-w-sm items-center gap-1.5'>
              <Label className='text-red-600 font-semibold'>
                Check Photo is required
              </Label>
              <Input
                type='file'
                accept='image/*'
                placeholder='Check book photo'
                onChange={(e) => handleUploadasset(e, 'check')}
                id='check'
                name='checkBook'
                required
              />
            </div>
            <div className='grid w-full max-w-sm items-center gap-1.5'>
              <Label>Upi Id</Label>
              <Input
                type='text'
                placeholder='Enter Upi id'
                onChange={(e) => handleArtistProfile(e, 'bank')}
                id='check'
                value={userData?.bankDetails?.upiId}
                name='upiId'
                required
              />
            </div>
          </div>
        </div> */}
        <div className='w-full flex justify-end mt-4'>
          <button
            type='submit'
            className='px-4 py-2 rounded-full bg-blue-100 border border-blue-200 flex items-center gap-2 font-semibold text-blue-600'
          >
            <Save /> Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditDetails;
