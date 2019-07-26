import React, { Component } from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'
import logo from './logo.JPG'

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Brand>
          <Link to="/home">
            <Image src={logo} width='200' height='70' />

          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="justify-content-end" >
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/introduction/visa">Visa Info</Nav.Link>
          

          </Nav>
         
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
