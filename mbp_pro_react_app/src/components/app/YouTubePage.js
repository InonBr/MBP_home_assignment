import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import jwt_decode from 'jwt-decode';
import UserData from './UserData';
import LinkForm from './LinkForm';
import VideoPlayer from './VideoPlayer';

const YouTubePage = () => {
  const cookies = new Cookies();
  const [userDataObj, setUserDataObj] = useState({});
  const [showLoading, setShowLoading] = useState(true);
  const [linkToPlat, setLinkToPlat] = useState('');

  useEffect(() => {
    const token = cookies.get('userToken');

    if (cookies.get('userToken')) {
      const decoded = jwt_decode(token);
      setUserDataObj(decoded);
      setShowLoading(false);
    } else {
      window.location = '/';
    }
    // eslint-disable-next-line
  }, [cookies.get('userToken')]);

  const setLinkFunc = (link) => {
    setLinkToPlat(link);
  };

  if (!showLoading) {
    return (
      <>
        <UserData userDataObj={userDataObj} />
        <LinkForm setLink={setLinkFunc} />
        <VideoPlayer link={linkToPlat} />
      </>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default YouTubePage;
