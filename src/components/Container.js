import React from "react";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import CSS from '../components/Components.css'




function Main() {
    return (
      <div className="jumbotron">
      
        <h1>Ryan Brooks</h1><br/>
        <Image id="image" src={require('../assets/images/ryanheadshot.png')} rounded /><br/><br/>
        <Container className="md-12">
        <p>
          Welcome to my portfolio page! As a recent graduate of the UNC-Charlotte Full Stack Coding Bootcamp, I am looking forward to putting my diverse skillset to use and to
          better positioning myself as employer competitive. During the bootcamp, I became proficient in technologies such as React, JavaScript, jQuery, Node.js, Sequelize, and MongoDB.
          My hope is to pursue a career in the world of software development, and I am excited to see where this new path in coding will lead.
          </p>
        <p>Please visit the links below and above to view my work. I look forward to hearing your input.</p>
        <p>Cell: 704-562-6121 <br/>Email: <a href = "mailto: ryanbrooks99@gmail.com">ryanbrooks99@gmail.com</a></p>
        </Container>
      </div>
    );
  }

export default Main;