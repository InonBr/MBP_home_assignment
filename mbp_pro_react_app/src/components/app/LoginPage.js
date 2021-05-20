import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import ModalCompnent from './ModalCompnent';
import jwt_decode from 'jwt-decode';
import '../styles/page_2.css';

const LoginPage = (props) => {
  const cookies = new Cookies();
  const [modalState, setModalState] = useState(false);
  const [modalType, setModalType] = useState('');
  const [showButtons, setShowButtons] = useState(true);
  const [userDataObj, setUserDataObj] = useState({});

  useEffect(() => {
    const token = cookies.get('userToken');

    if (cookies.get('userToken')) {
      const decoded = jwt_decode(token);
      setUserDataObj(decoded);
      setShowButtons(false);
      props.func();
    }
    // eslint-disable-next-line
  }, [cookies.get('userToken')]);

  const handleClose = () => {
    setModalState(false);
    setModalType('');
  };

  const hendleModals = (type, bool) => {
    setModalState(bool);
    setModalType(type);
  };

  const loginButtons = () => {
    return (
      <div className='mt-5 row justify-content-around'>
        <Button
          variant='success'
          onClick={() => hendleModals('register', true)}
        >
          Register
        </Button>

        <Button variant='primary' onClick={() => hendleModals('login', true)}>
          Login
        </Button>
      </div>
    );
  };

  const userData = () => {
    return (
      <div className='text-align'>
        <h4>First name: {userDataObj.firstName}</h4>
        <h4>Last name: {userDataObj.lastName}</h4>
        <h4>Phone number: {userDataObj.phoneNumber}</h4>
        <h4>email: {userDataObj.email}</h4>
      </div>
    );
  };

  return (
    <>
      {showButtons && loginButtons()}
      <ModalCompnent type={modalType} bool={modalState} func={handleClose} />
      {userData()}
    </>
  );
};

export default LoginPage;
