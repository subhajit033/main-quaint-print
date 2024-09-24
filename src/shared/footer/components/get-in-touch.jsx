import ContactUsForm from './contact-us-form';
const GetInTouch = () => {
  return (
    <div className='px-4 py-6 lg:h-[85vh] lg:px-20 lg:py-10 bg-[#FBF8FF]'>
      <div style={{display:'flex', justifyContent:"center"}}>
        {/**Left side */}
        <div className='space-y-4'>
          <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] to-[#81015D] text-clip text-2xl lg:text-4xl font-bold'>Service Areas</h1>
          <p className='text-base leading-tight text-gray-500 lg:w-[60%]'>
            Lorem ipsum dolor sit amet consectetur. Condimentum turpis
            pellentesque tincidunt pellentesque posuere lacus vitae. Tristique
            molestie nulla fringilla sit.
          </p>
          <p className='text-xl text-center font-semibold px-6 py-4 shadow-md bg-white rounded-full lg:w-[50%]'>
            🥳 We are providing our services throughout India
          </p>
          <div>
            <p className='text-lg font-bold pt-10 pb-5'>Find Us on Google Maps</p>
            <div className='w-full  lg:w-[80%] lg:h-96'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14996.016822103915!2d73.7563654!3d20.0083382!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb705d8d581d%3A0x15b55e47c4a7f07a!2sTreemiti%20Informatics!5e0!3m2!1sen!2sin!4v1726509947181!5m2!1sen!2sin"
                width="100%"
                height='100%'
                    
                style={{ border: 0,borderRadius:'2rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>

        <div className=''>
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
