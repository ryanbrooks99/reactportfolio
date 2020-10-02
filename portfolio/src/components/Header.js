import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


function Header () {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Ryan Brooks</Navbar.Brand>
        <Nav className="mr-auto">
          {/* <Nav.Link href="#Container">Home</Nav.Link>
        <Nav.Link href="#Portfolio">Portfolio</Nav.Link> */}
        </Nav>
      </Navbar>
    
  </> 
  );
}


export default Header;
