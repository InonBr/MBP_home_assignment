import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import '../styles/forms.css';

const LinkForm = (props) => {
  const [link, setLink] = useState('');

  const hendleUrlInput = (event) => {
    setLink(event.target.value);
  };

  const hendleSubmit = (event) => {
    event.preventDefault();
    props.setLink(link);

    setLink('');
  };

  return (
    <div className='center-div'>
      <Form className='m-5 form-size' onSubmit={(event) => hendleSubmit(event)}>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Please provide a vidio url</Form.Label>
          <Form.Control
            type='url'
            placeholder='Enter url'
            value={link}
            onInput={(event) => hendleUrlInput(event)}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LinkForm;
