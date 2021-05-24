import { useState } from 'react';
import ReactPlayer from 'react-player';
import { Image } from 'react-bootstrap';
import '../styles/forms.css';
import '../styles/image.css';

const VideoPlayer = (props) => {
  const [showPlayer, setShowPlayer] = useState(true);
  console.log(props.link);

  const videoPlayerError = () => {
    setShowPlayer(false);
  };

  const playerDiv = () => {
    return (
      <div className='center-div'>
        <ReactPlayer
          controls
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          onError={() => videoPlayerError()}
        />
      </div>
    );
  };

  const errorImage = () => {
    return (
      <div className='center-div'>
        <Image
          className='image-size'
          src='https://www.fullertonsfuture.org/wp-content/uploads/2019/09/nothing-to-see-here-move-along.jpg'
          alt={'video was not found'}
        />
      </div>
    );
  };

  return (
    <>
      {showPlayer && playerDiv()}
      {!showPlayer && errorImage()}
    </>
  );
};

export default VideoPlayer;
