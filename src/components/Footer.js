import React from "react";
import { Container, Row, Image, Col, FormText } from "react-bootstrap";
import "./Footer.css";
import footerlogo from './footerLogo.jpg';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
  
    <Row>    
      <Col md="12">        
        <Image src={footerlogo} width="200" height="50"/>
        <p> </p>
        <FormText className = "desc">
        <p>Copyright © 2019 The Escapers Group</p>
        <p><Link to="/disclaimer">Disclaimer and Copyright</Link></p>
        
        </FormText>
      </Col>
    </Row>
  </footer>
);

export default Footer;
