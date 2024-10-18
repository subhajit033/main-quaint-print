import peyment from '../../../assets/payment.png'


const ContactInformation = () => {
  return (
    <div  className=' w-full border-t gap-y-12  px-4 sm:px-20 lg:px-40 py-10 flex flex-row flex-wrap justify-center items-start sm:justify-between'>
      {/**Left side */}
      <div className='w-[80%] text-center sm:text-left xl:w-[30%] flex flex-col  justify-center sm:justify-between h-80'>
        <h1 className='text-5xl font-bold text-pink-800 mb-2'>Say Hello</h1>
        <div className="space-y-6">
          <div className="space-y-6">
            <p className='text-gray-600 font-semibold text-2xl'>Stay updated on news</p>
            <form className='relative w-[90%] mx-auto sm:mx-0 border border-black  px-1.5 py-1.5 rounded-full flex flex-row'>
              <input
                required
                className=' focus:outline-none rounded-full pl-6 w-full text-[16px]'
                type='email'
                placeholder='You email'
              />
              <button
                type='submit'
                className='px-6 py-2.5 rounded-full bg-[#84142E] text-white text-sm font-semibold '
              >
                Subscribe
              </button>
            </form>
          </div>
          <p className="text-gray-500 font-semibold">ⓒ 2024 Veteran medias LLP. All Rights Reserved</p>
        </div>
      </div>
      {/**middle side */}
      <div className='w-[80%] sm:w-[40%] xl:w-[30%] flex flex-col sm:items-start items-center text-center sm:text-left '>
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

      <div className='w-[80%] sm:w-[40%] xl:w-[30%]  flex flex-col sm:items-start items-center text-center sm:text-left '>
        <div className=" w-[100%] space-y-4">
          <h1 className="text-3xl font-semibold">Address</h1>
          <p className='text-black-800 font-medium text-lg '>
            Office 1, Second Floor, Indira y , Gangapur Rd, Near Pramod Mahajan
            Garden, Old Gangapur Naka, Nashik, Maharashtra, 422005
          </p>
          <p className='text-black-800 font-medium text-lg '>+91 00000 00000</p>
          <p className='text-black-800 font-medium text-lg '>See on map</p>
          <img src={peyment} style={{width:"100%",height:"auto"}}/>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
