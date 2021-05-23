import { useState } from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cookies from 'universal-cookie';

import ImagesCrossfade from './ImagesCrossfade';
import LoginPage from './LoginPage';
import StockPage from './StockPage';
import YouTubePage from './YouTubePage';

function Nevbar() {
  const cookies = new Cookies();
  const [showlogout, setShowlogout] = useState(false);

  const showLogoutButton = () => {
    setShowlogout(true);
  };

  const handleLogout = () => {
    cookies.remove('userToken');
    window.location = '/';
  };

  const logoutButton = () => {
    return (
      <Button variant='outline-info' onClick={() => handleLogout()}>
        logout
      </Button>
    );
  };

  const page_4_show_link = () => {
    return (
      <Nav.Link exact='true' className='link' href='/page_4'>
        page 4
      </Nav.Link>
    );
  };

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

          {cookies.get('userToken') && page_4_show_link()}
        </Nav>

        <Form inline>{cookies.get('userToken') && logoutButton()}</Form>
      </Navbar>

      <Router>
        <Switch>
          <Route path='/page_2'>
            <LoginPage func={showLogoutButton} />
          </Route>

          <Route path='/page_3'>
            <StockPage />
          </Route>

          <Route path='/page_4'>
            <YouTubePage />
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
