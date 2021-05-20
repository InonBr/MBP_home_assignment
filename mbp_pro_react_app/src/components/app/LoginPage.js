import { useState } from 'react';
import { Button } from 'react-bootstrap';
import ModalCompnent from './ModalCompnent';

const LoginPage = () => {
  const [modalState, setModalState] = useState(false);
  const [modalType, setModalType] = useState('');

  const handleClose = () => {
    setModalState(false);
    setModalType('');
  };

  const hendleModals = (type, bool) => {
    setModalState(bool);
    setModalType(type);
  };

  return (
    <>
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

      <ModalCompnent type={modalType} bool={modalState} func={handleClose} />
    </>
  );
};

export default LoginPage;
