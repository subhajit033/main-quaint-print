// import { NewsletterBg } from '@/assets/assets';

// const Newsletter = () => {
//   return (
//     <div className='hidden lg:block px-20 py-10'>
//       <img src={NewsletterBg} alt='newsletter' />
//     </div>
//   );
// };

// export default Newsletter;

import styled from 'styled-components';
import massageIcon from '../../../assets/newzletter.svg';
import bell from '../../../assets/bell.svg';
import sticker from '../../../assets/newzlettersticker.svg';
import sticker2 from '../../../assets/circle pattern vertical.svg';

const MainContainer = styled.div`
  width: 100%;
  padding: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 2.5rem;
  background-color: #F2F5FF;
  width: 90%;
`;

const Content = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
  justify-content: center;
  align-items: start;
  gap: 1rem;

  h3 {
    font-size: 1.6rem;
    font-weight: 700;
  }

  p {
    font-size: 1.1rem;
    font-weight: 500;
  }

  button {
    font-size: 1.2rem;
    color: white;
    padding: 0.8rem 2.5rem;
    border-radius: 2rem;
    background: linear-gradient(0deg, #0D80D9 0%, #0D4282 100%);
    display: flex;
    gap: 1rem;
  }
`;

const ImgDiv = styled.div`
  background: linear-gradient(0deg, #0D80D9 0%, #0D4282 100%);
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  border-radius: 2.5rem 2rem 2rem 10rem;
`;

const Sticker = styled.img`
  position: absolute;
  left: 160px;
  bottom: 80px;
  z-index: -1;
`;

const Sticker2 = styled.img`
  position: absolute;
  right: 160px;
  top: 72px;
  z-index: -1;
`;

const Sticker3 = styled.img`
  position: absolute;
  right: 160px;
  top: 135px;
  z-index: -1;
`;

const Newsletter = () => {
  return (
    <MainContainer>
      <Container>
        <Content>
          <h3>Stay Up-to-Date with Awesome Content</h3>
          <p>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          </p>
          <button>
            <img src={bell} alt='bell' />
            Subscribe!
          </button>
        </Content>
        <ImgDiv>
          <img src={massageIcon} alt='massageicon' />
        </ImgDiv>
      </Container>
      <Sticker src={sticker} alt='' />
      <Sticker2 src={sticker2} alt='' />
      <Sticker3 src={sticker2} alt='' />
    </MainContainer>
  );
};

export default Newsletter;


