import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import RegisterForm from './RegisterForm';
import LoginFrom from './LoginForm';

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

      <Modal.Body>
        {props.type === 'register' && <RegisterForm closeModal={props.func} />}
        {props.type === 'login' && <LoginFrom closeModal={props.func} />}
      </Modal.Body>
    </Modal>
  );
};

export default ModalCompnent;
