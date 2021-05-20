import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import ModalCompnent from './ModalCompnent';

const LoginPage = (props) => {
  const cookies = new Cookies();
  const [modalState, setModalState] = useState(false);
  const [modalType, setModalType] = useState('');
  const [showButtons, setShowButtons] = useState(true);

  useEffect(() => {
    if (cookies.get('userToken')) {
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

  return (
    <>
      {showButtons && loginButtons()}
      <ModalCompnent type={modalType} bool={modalState} func={handleClose} />
    </>
  );
};

export default LoginPage;
