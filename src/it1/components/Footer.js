import React from "react";
import { Container, Row, Image, Col, FormText } from "react-bootstrap";
import "./Footer.css";
import footerlogo from './footer-logo.JPG'

const Footer = () => (
  <footer className="footer">
  
    <Row>    
      <Col md="12">        
        <Image src={footerlogo} width="170" height="70"/>
        <p> </p>
        <FormText className = "desc">
        <p>2nd Innings - Version 2019.10.4</p>
        <p>Copyright © 2019 The Escapers Group</p>
        <p>
          We acknowledge and pay respects to the Elders past, present and emerging. 
        </p>
        </FormText>
      </Col>
    </Row>
  </footer>
);

export default Footer;
