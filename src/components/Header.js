import React from 'react'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'

const Header = () => (
  <header>
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Navbar.Brand href='/'>Bootstrap admin</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='/signin'>Signin</Nav.Link>
          <Nav.Link href='/signup'>Signup</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href='#'>One</Nav.Link>
          <Nav.Link eventKey={2} href='#'>
            Two
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

export default Header
