import peyment from '../../../assets/payment.png'


const ContactInformation = () => {
  return (
    <div  className='hidden border-t  px-40 py-10 lg:flex items-start justify-center'>
      {/**Left side */}
      <div className='flex-1 flex flex-col justify-between h-80'>
        <h1 className='text-5xl font-bold text-pink-800'>Say Hello</h1>
        <div className="space-y-6">
          <div className="space-y-6">
            <p className='text-gray-600 font-semibold text-2xl'>Stay updated on newss</p>
            <form className='relative w-[90%]'>
              <input
                required
                className='border border-black w-full px-7 py-3 rounded-full'
                type='email'
                placeholder='You email'
              />
              <button
                type='submit'
                className='px-4 py-1.5 rounded-full bg-[#84142E] text-white text-sm font-semibold absolute right-1.5 top-2.5'
              >
                Subscribe
              </button>
            </form>
          </div>
          <p className="text-gray-500 font-semibold">ⓒ 2024 Veteran medias LLP. All Rights Reserved</p>
        </div>
      </div>
      {/**middle side */}
      <div className='flex-1 flex flex-col items-center '>
        <div className='space-y-4'>
          <div>
            <h1 className='text-3xl font-semibold'>For Business</h1>
            <p className="text-lg font-normal">info@veteranmedias.com</p>
            <p className="text-lg font-normal">veteranmedias@gmail.com</p>
          </div>
          <div>
            <h1 className='text-3xl font-medium'>Follow Us</h1>
            <p className="text-lg font-normal">LinkedIn</p>
            <p className="text-lg font-normal">Instagram</p>
            <p className="text-lg font-normal">Facebook</p>
          </div>
          <div>
            <h1 className='text-3xl font-semibold'>Legal </h1>
            <p className="text-lg font-normal">Cookie Policy</p>
            <p className="text-lg font-normal">Privacy Policy</p>
          </div>
        </div>
      </div>
      {/**right side */}

      <div className='flex-1  flex justify-end w-full'>
        <div className=" w-[60%] space-y-4">
          <h1 className="text-3xl font-semibold">Contact</h1>
          <p className='text-black-800 font-medium text-lg '>
            Office 1, Second Floor, Indira y , Gangapur Rd, Near Pramod Mahajan
            Garden, Old Gangapur Naka, Nashik, Maharashtra, 422005
          </p>
          <p className='text-black-800 font-medium text-lg '>+91 93729 38392</p>
          <p className='text-black-800 font-medium text-lg '>See on map</p>
          <img src={peyment} style={{width:"100%",height:"auto"}}/>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
