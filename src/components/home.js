import React from 'react';
import Header from "./header/index";
import JumbotronHead from './jumbotron/index';
import Skills from "./skills/index";
import Portfolio from "./portfolio/index";
import Footer from "./footer/index"

function Home() {
  return (
    <div className="App">
      <JumbotronHead />
      <Skills />
      <Portfolio />
    </div>
  );
}

export default Home;