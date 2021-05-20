import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import RegisterForm from './RegisterForm';

const ModalCompnent = (props) => {
  const [headMessage, setHeadMessage] = useState('');

  useEffect(() => {
    headText();
  });

  const headText = () => {
    if (props.type === 'login') {
      setHeadMessage('Wlecome back!');
    } else {
      setHeadMessage('Wlecome friend!');
    }
  };

  return (
    <Modal show={props.bool} onHide={props.func}>
      <Modal.Header closeButton>
        <Modal.Title>{headMessage}</Modal.Title>
      </Modal.Header>
      <div className='m-3'>
        {props.type === 'register' && <RegisterForm closeModal={props.func} />}
        <Modal.Body>some body</Modal.Body>
      </div>
    </Modal>
  );
};

export default ModalCompnent;
