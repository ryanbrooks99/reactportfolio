import React from "react";
import Image from 'react-bootstrap/Image'



function Container() {
    return (
      <div className="jumbotron">
        <h1>Ryan Brooks' Portfolio</h1>
        <Image src={require('../assets/images/ryanheadshot.png')} rounded />
        <p>
          Welcome to my portfolio page. As an up and coming developer in the UNC-Charlotte full stack bootcamp, I am looking forward to acquiring a diverse skillset to
          better position myself as employer competitive upon entering the work force. Upon completing the coding bootcamp, my hope is to obtain a career path in the world of
          software development. As I am always looking for new opportunities, I am excited to see where this new path in coding will lead.
        </p>
        <p>Please visit the links below to view my work. I look forward to hearing your input!</p>
        <p>Cell: 704-562-6121</p>
        <p>Email: <a href = "mailto: ryanbrooks99@gmail.com">ryanbrooks99@gmail.com</a></p>
        <ul>
        <p>Click <a href="assets/images/Ryan L Brooks Resume.pdf" target="_blank">HERE</a> to view a PDF copy of my resume.</p>
        <p>Click <a href="https://github.com/ryanbrooks99" target="_blank">HERE</a> to visit my GitHub.</p>
        <p>Click <a href="https://www.linkedin.com/in/ryanbrooks0101/" target="_blank">HERE</a> to visit my LinkedIn.</p>
        </ul>
      </div>
    );
  }

export default Container;