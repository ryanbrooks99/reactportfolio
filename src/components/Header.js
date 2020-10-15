import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import PDF from '../assets/images/Ryan_L_Brooks_Resume.pdf'
import CSS from '../components/Components.css'


function Header () {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Ryan Brooks</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
        <Nav.Link href={PDF} target="_blank" rel="noopener noreferrer">Resume</Nav.Link>
        <Nav.Link href="https://github.com/ryanbrooks99" target="_blank" rel="noopener noreferrer">GitHub</Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/ryanbrooks0101/" target="_blank" rel="noopener noreferrer">LinkedIn</Nav.Link>
        </Nav>
      </Navbar>
    
  </> 
  );
}


export default Header;
