import React from 'react';
import './App.css';
import Header from "./components/header/index";
import JumbotronHead from './components/jumbotron/index';
import Skills from "./components/skills/index";
import Portfolio from "./components/portfolio/index"
import Footer from "./components/footer/index"
function App() {
  return (
    <div className="App">
      <Header />
      <JumbotronHead />
      <br /><br />
      <Skills />
      <br /><br />
      <Portfolio />
      <br /><br />
      <Footer />
    </div>
  );
}

export default App;
