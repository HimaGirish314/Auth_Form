import React from 'react';
import  {Navbar ,Nav,Container}  from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Layout = ({children}) => {
  return (
        <>
          <Navbar bg="primary" variant='dark'>
            <Navbar.Brand>
                <Nav.Link as={Link} to="/">Auth Demo</Nav.Link>
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/login">
                        Login
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Container>{children}</Container>
        </>
  )
}

export default Layout;