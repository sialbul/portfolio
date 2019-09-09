import React from 'react';
import JumbotronHead from './jumbotron/index';
import Skills from "./skills/index";
import Portfolio from "./portfolio/index";

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