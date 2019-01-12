import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'

const Header = () => (
  <header>
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Link className='navbar-brand' to='/'>Bootstrap admin</Link>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Link className='nav-link' to='/signin'>Signin</Link>
          <Link className='nav-link' to='/signup'>Signup</Link>
        </Nav>
        <Nav>
          <Link className='nav-link' to='#'>One</Link>
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
