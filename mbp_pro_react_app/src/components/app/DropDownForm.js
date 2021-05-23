import { useState } from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import '../styles/forms.css';

const DropDownForm = (props) => {
  const [selectedMethod, setSelectedMethod] = useState('Alphabetically');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.func(selectedMethod);
  };

  const handleSelect = (event) => {
    setSelectedMethod(event.target.value);
  };

  return (
    <Form inline onSubmit={(event) => handleSubmit(event)}>
      <Form.Row className='align-items-center mt-5 center-form'>
        <Form.Label className='mr-3'>Sort Method</Form.Label>

        <Col xs='auto'>
          <Form.Control
            as='select'
            className='mr-sm-3'
            id='inlineFormCustomSelect'
            onInput={(event) => {
              handleSelect(event);
            }}
          >
            <option value='Alphabetically'>Alphabetically</option>
            <option value='Numerically'>Numerically</option>
          </Form.Control>

          <Button type='submit'>Submit</Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

export default DropDownForm;
