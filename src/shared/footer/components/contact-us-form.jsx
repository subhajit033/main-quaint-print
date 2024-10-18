import { Phone } from 'lucide-react';
import { useEffect, useState } from 'react';
import api from '@/api';
import toast from 'react-hot-toast';
import { Loader2 } from 'lucide-react';

const ContactUsForm = () => {
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const onChangehandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    setFormData({ ...formData, message });
  }, [message]);
  const sendEnq = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post('/admin/enquiry', formData);
      toast.success('Enquiry submitted successfully');
      setLoading(false);
    } catch (e) {
      setLoading(false);
      toast.error('Something went wrong');
    }
  };
  return (
    <div className='p-[30px] w-[100%] bg-white rounded-3xl border border-[#EFE7EA]'>
      <h1 className='text-4xl font-semibold'>Get in touch</h1>
      <p className='text-lg text-gray-500 mb-8'>You can reach us anytime</p>
      <form onSubmit={sendEnq}>
        <div className='flex flex-col items-center gap-4'>
          <div className='flex items-center gap-3 w-full'>
            <input
              name='firstName'
              type='text'
              required
              className='w-full text-[16px] text-gray-800 border border-gray-300 focus:bg-transparent px-6 py-3 rounded-full outline-blue-600'
              placeholder='Enter fisrt name'
              onChange={onChangehandler}
            />
            <input
              name='lastName'
              type='text'
              required
              className='w-full text-sm text-gray-800 border border-gray-300 focus:bg-transparent px-6 py-3 rounded-full outline-blue-600'
              placeholder='Enter last name'
              onChange={onChangehandler}
            />
          </div>
          <div className='relative w-full flex items-center'>
            <input
              name='email'
              type='text'
              required
              className='w-full text-sm text-gray-800 border border-gray-300 focus:bg-transparent px-12 py-3 rounded-full outline-blue-600'
              placeholder='Enter email'
              onChange={onChangehandler}
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='#bbb'
              stroke='#bbb'
              className='w-[18px] h-[18px] absolute left-4'
              viewBox='0 0 682.667 682.667'
            >
              <defs>
                <clipPath id='a' clipPathUnits='userSpaceOnUse'>
                  <path d='M0 512h512V0H0Z' data-original='#000000'></path>
                </clipPath>
              </defs>
              <g
                clipPath='url(#a)'
                transform='matrix(1.33 0 0 -1.33 0 682.667)'
              >
                <path
                  fill='none'
                  strokeMiterlimit='10'
                  strokeWidth='40'
                  d='M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z'
                  data-original='#000000'
                ></path>
                <path
                  d='M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z'
                  data-original='#000000'
                ></path>
              </g>
            </svg>
          </div>

          <div className='relative w-full flex items-center'>
            <input
              name='contactNo'
              type='text'
              required
              className='w-full text-sm text-gray-800 border border-gray-300 focus:bg-transparent px-12 py-3 rounded-full outline-blue-600'
              placeholder='Phone No'
              onChange={onChangehandler}
            />
            <Phone className='w-[18px] h-[18px] text-gray-400 absolute left-4' />
          </div>

          <textarea
            rows={7}
            onChange={(e) => setMessage(e.target.value)}
            className='w-full text-sm text-gray-800 border border-gray-300 focus:bg-transparent px-6 py-3 rounded-xl outline-blue-600'
            placeholder='type you message here'
            required
          />
        </div>

        <div className='mt-8'>
          <button
            type='submit'
            className='w-full py-3 px-6 text-sm tracking-wide font-semibold rounded-full text-white bg-[#84142E] hover:opacity-65 focus:outline-none flex justify-center'
          >
            {loading ? <Loader2 className='animate-spin' /> : 'Submit'}
          </button>
        </div>
      </form>
      <p className='text-center text-[#6E6E73] pt-7'>By Contacting us you agree to our <span className='font-semibold'>Terms<br/>
      of Service</span> and <span className='font-semibold'>Privacy Policy</span></p>
    </div>
  );
};

export default ContactUsForm;
