import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ImagesCrossfade from './ImagesCrossfade';
import LoginPage from './LoginPage';

function Nevbar() {
  return (
    <>
      <Navbar className='nev' bg='dark' variant='dark'>
        <Nav className='mr-auto'>
          <Nav.Link exact='true' className='link' href='/'>
            page 1
          </Nav.Link>

          <Nav.Link exact='true' className='link' href='/page_2'>
            page 2
          </Nav.Link>

          <Nav.Link exact='true' className='link' href='/page_3'>
            page 3
          </Nav.Link>

          <Nav.Link exact='true' className='link' href='/page_4'>
            page 4
          </Nav.Link>
        </Nav>

        <Form inline>
          <Button variant='outline-info'>logout</Button>
        </Form>
      </Navbar>

      <Router>
        <Switch>
          <Route path='/page_2'>
            <LoginPage />
          </Route>

          <Route path='/page_3'>
            <h1>page_3</h1>
          </Route>

          <Route path='/page_4'>
            <h1>page_4</h1>
          </Route>

          <Route path='/'>
            <ImagesCrossfade />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Nevbar;
