import React from 'react';
import './App.css';
import Header from "./components/header/index";
import JumbotronHead from './components/jumbotron/index';
import Skills from "./components/skills/index";
import Portfolio from "./components/portfolio/index";
import Footer from "./components/footer/index";
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact strict path="/" component={Home} />
        <Route exact path="/aboutme" component={JumbotronHead} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Footer />
      </Router>

    </div>
  );
}

export default App;
