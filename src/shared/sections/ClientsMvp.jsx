import Marquee from 'react-fast-marquee';

const MvpCard = () => {
  const imageUrl =
    'https://s3-alpha-sig.figma.com/img/b548/dcbf/a8005da06e773447bd637e7e7820c913?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o8F9t1G7iogMqEk9oH5sQQA~TOa4jah1dE7UEyYrlD8aPs0MuLfvuefQFe~uAlitJRw1OhL2tL~cdWP0GVxL2yUFpeEY5xdqPDiwNGaHq17YJpvBroMGH-05t02txt6fQkERu3BknkAah8CoS4QrJTlZXmpIiiqNNBmrgHxZNnNj3qUKUz3AbQRbAStS7PLBiABMHywvLgqQlWqpSAVsDLyQLbWVY~hKYZvkWMbFjLQTtwXseupBvg65cZi85xdXp7sOH-6OVLbiyrkGkm5TJKxU8W4k~nDOLmqFQj99lOxkFckz1DryBkUDKkpTifJs-pBDbVB5X~skQtRofIg6Pg__';
  return (
    <div className='w-80 h-64 gap-5 px-2 flex flex-col items-center'>
      <img className='w-24 h-24' src={imageUrl} alt='dummy' />
      <h3 className='font-bold text-2xl'>Lorem Ipsum</h3>
      <p className='text-black-500 leading-tight font-medium text-base text-center'>
        Lorem ipsum dolor sit amet consectetur. Condimentum turpis pellentesque
        tincidunt pellentesque posuere lacus vitae. Tristique molestie nulla
        fringilla sit.
      </p>
    </div>
  );
};

const ClientsMvp = () => {
  return (
    <div className='px-4 lg:px-20 py-10 my-10'>
      <div className='flex flex-col items-center gap-4 mb-8'>
        <h3 className='text-3xl font-semibold text-blue-600 kalamText'>Ink Features</h3>
        <h1 className='text-xl text-center w-[95%]  lg:w-full lg:text-5xl font-bold'>
          Experience Vibrant, Long-Lasting, and Eco-Friendly Prints
        </h1>
        <p className='text-lg text-gray-400 leading-tight w-[65%] text-center font-semibold'>
          Our high-quality inks deliver vibrant colors that bring your prints to
          life. Each shade is accurately represented, ensuring your images are
          vivid and true to their original appearance.
        </p>
      </div>
      <div className='hidden lg:grid grid-cols-4 justify-items-center mt-20 gap-8'>
        {Array(4)
          .fill('_')
          .map((_, i) => {
            return <MvpCard key={i} />;
          })}
      </div>
      <div className='lg:hidden'>
        <Marquee>
          {Array(4)
            .fill('_')
            .map((_, i) => {
              return <MvpCard key={i} />;
            })}
        </Marquee>
      </div>
    </div>
  );
};

export default ClientsMvp;
