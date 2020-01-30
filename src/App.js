import React from 'react';
import './App.css';
import Header from "./components/header/index";
import JumbotronHead from './components/jumbotron/index';
import Skills from "./components/skills/index";
import Portfolio from "./components/portfolio/index";
import Footer from "./components/footer/index";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from "./components/home";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button"; //Add this line Here
import { whileStatement } from '@babel/types';


function App() {
  return (
    <div className="App">
        <div className="stars">

      <Router>
        <Header />
        <Route exact strict path="/" component={Home} />
        <Route exact path="/aboutme" component={JumbotronHead} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Footer />
        <ScrollUpButton
          style={{ backgroundColor: "white" }}
        />
      </Router>
      </div>

    </div>
  );
}

export default App;
