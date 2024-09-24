import Marquee from 'react-fast-marquee';
import {
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
} from '@/assets/assets';

const CompanyLogo = ({ image }) => {
  return <img className='w-40 lg:w-60' src={image} alt='our-clients' />;
};

const Clients = () => {
  const clients = [client1, client2, client3, client4, client5, client6];
  return (
    <div className='px-4 lg:px-20 py-20'>
      <div>
        <h1 className=' text-2xl lg:text-5xl font-bold text-black-600 text-center mb-20'>
          Our Major Client
        </h1>
      </div>
      <Marquee>
        {clients.map((image, i) => (
          <CompanyLogo key={i} image={image} />
        ))}
      </Marquee>
    </div>
  );
};

export default Clients;
