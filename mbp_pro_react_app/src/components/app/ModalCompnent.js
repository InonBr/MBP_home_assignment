import { Modal } from 'react-bootstrap';

const ModalCompnent = (props) => {
  return (
    <Modal show={props.bool} onHide={props.func}>
      <Modal.Header closeButton>
        <Modal.Title>some title</Modal.Title>
      </Modal.Header>
      <Modal.Body>some body</Modal.Body>
    </Modal>
  );
};

export default ModalCompnent;
