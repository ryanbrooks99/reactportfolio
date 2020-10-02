import React from 'react';
import './App.css';
import Header from "./components/Header"
import Portfolio from "./components/Portfolio"
import Container from "./components/Container"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
     <Header />
     <Container />  
     <Portfolio />
     <Footer />
    </div>
  );
}

export default App;
