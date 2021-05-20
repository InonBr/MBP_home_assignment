import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../styles/slide_container.css';

const ImagesCrossfade = () => {
  const fadeImages = [
    'https://res.cloudinary.com/dds64vxxo/image/upload/v1620035343/wallpaperbetter.com_7680x4320_8_lvbfth.jpg',
    'https://res.cloudinary.com/dds64vxxo/image/upload/v1621414007/wallpaperbetter.com_7680x4320_4_tfo3qv.jpg',
    'https://res.cloudinary.com/dds64vxxo/image/upload/v1621414009/wallpaperbetter.com_7680x4320_6_egcfs7.jpg',
    'https://res.cloudinary.com/dds64vxxo/image/upload/v1610116931/389848_mikeagar85_rick-and-morty-02-duel-monitor-wallpaper_wwqzka.jpg',
  ];

  const properties = {
    duration: 2000,
    arrows: false,
    transitionDuration: 500,
  };

  return (
    <div className='slide-container slide mt-5'>
      <Fade {...properties}>
        {fadeImages.map((each, index) => (
          <img
            key={index}
            style={{ width: '60%', height: '80%' }}
            src={each}
            alt={'images slide show'}
          />
        ))}
      </Fade>
    </div>
  );
};

export default ImagesCrossfade;
