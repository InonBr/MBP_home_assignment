import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import jwt_decode from 'jwt-decode';
import UserData from './UserData';
import '../styles/page_2.css';

const YouTubePage = () => {
  const cookies = new Cookies();
  const [userDataObj, setUserDataObj] = useState({});
  const [showLoading, setShowLoading] = useState(true);

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

  if (!showLoading) {
    return <UserData userDataObj={userDataObj} />;
  } else {
    return <h1>Loading...</h1>;
  }
};

export default YouTubePage;
