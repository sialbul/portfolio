import React, { Component } from 'react';
import './style.css';
import { Row, Col } from 'react-bootstrap';
import Typist from 'react-typist';
import bamazon from "./bamazon.png";
import burger from "./burger.png";
import cityguide from "./cityguide.jpg";
import clickyGame from "./ClickyGame.png";
import googlebook from "./googlebook.png";
import hangman from "./hangman.jpg";
import horrorgif from "./horrorgif.jpg";
import hotelWorx from "./hotelWorx.jpg";
import OnTrack from "./OnTrack.png";
import rps from "./rps.jpg";
import starwars from "./starwars.jpg";
import liriNode from "./liri-node.png";



class Portfolio extends Component {

    render() {
        return (
            <div id="portfolioDiv"> 
                <br /><br />
                <Typist>
                    <h2 id="head">Portfolio</h2>
                </Typist>
                <br /><br />
                <div id="portfolioDiv">
                    <br />
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={6} xl={4}>
                            <div className="container">
                                <img className="portfolioImg" src={hotelWorx} alt="hotelWorx" />
                                <div className="overlay">
                                    <div className="text">
                                        <p id="exp"> Hotel Worx is a property management system and is suitable for
                                            the management of all sizes and types of accommodation facilities. It is
                                            implemented using React.js, MySQL and Passport.
                                            <br /> </p>
                                        <a target="blank" title="Visit Website"
                                            href="https://hotelworx.herokuapp.com/login">
                                            <i id="githubLeft" className="fa fa-globe"></i>

                                        </a>
                                        <a href="https://github.com/Vincent440/hotel-worx" target="blank"
                                            title="Visit GitHub"><i id="githubLeft" className="fa fa-github"></i></a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6} xl={4}>
                            <div className="container">
                                <img className="portfolioImg" src={googlebook} alt="googlebook" />
                                <div className="overlay">
                                    <div className="text">
                                        <p id="exp"> The application is a React-based Google Books Search. It is
                                            implemented using Node, Express and MongoDB.
                                            <br /> </p>
                                        <a target="blank" title="Visit Website"
                                            href="https://dry-citadel-33531.herokuapp.com/">
                                            <i id="githubLeft" className="fa fa-globe"></i>
                                        </a>
                                        <a href="https://github.com/sialbul/GoogleBookSearch" target="blank"
                                            title="Visit GitHub"><i id="githubLeft" className="fa fa-github"></i></a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6} xl={4}>
                            <div className="container">
                                <img className="portfolioImg" src={OnTrack} alt="OnTrack" />
                                <div className="overlay">
                                    <div className="text">
                                        <p id="exp"> The application is implemented using HTML, CSS, JavaScript,
                                            jQuery, Node, MySql, Heroku.
                                            <br /> </p>
                                        <a target="blank" title="Visit Website"
                                            href="https://ancient-cove-33543.herokuapp.com/">
                                            <i id="githubLeft" className="fa fa-globe"></i>

                                        </a>
                                        <a href="https://github.com/sialbul/OnTrack" target="blank"
                                            title="Visit GitHub"><i id="githubLeft" className="fa fa-github"></i></a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6} xl={4}>
                            <div className="container">
                                <img className="portfolioImg" src={clickyGame} alt="Clicky Game" />
                                <div className="overlay">
                                    <div className="text">
                                        <p id="exp"> Clicky Memory Game built with React.js
                                            <br /> </p>
                                        <a target="blank" title="Visit Website"
                                            href="https://cryptic-brook-58304.herokuapp.com/">
                                            <i id="githubLeft" className="fa fa-globe"></i>
                                        </a>
                                        <a href="https://github.com/sialbul/Clicky-Game" target="blank"
                                            title="Visit GitHub">
                                            <i id="githubLeft" className="fa fa-github"></i>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6} xl={4}>
                            <div className="container">
                                <img className="portfolioImg" src={burger} alt="Eat de Burger" />
                                <div className="overlay">
                                    <div className="text">
                                        <p id="exp"> This project is a burger logger
                                            with MySQL, Node, Express, Handlebars and <br />
                                            a homemade ORM, following the MVC design pattern.
                                            <br /></p>
                                        <a target="_blank" title="Visit Website"
                                            href="https://peaceful-beyond-77283.herokuapp.com/">
                                            <i id="githubLeft" className="fa fa-globe"></i>
                                        </a>
                                        <a href="https://github.com/sialbul/burger" title="Visit GitHub"
                                            target="blank"><i id="githubLeft" className="fa fa-github"></i></a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        {/* <div className="col-md-4">
                            <div id="projectBox">
                                <div className="container">
                                    <img src="assets/images/friend finder.png" alt="Friend Finder">
                                    <div className="overlay">
                                        <div className="text">
                                            <p id="exp"> The application is implemented using a
                                                Node.js and Express server on the back end and the CSS framework
                                                on
                                                the
                                                front end.
                                                </br></p>
                                            <a target="_blank" title="Visit Website"
                                                href="https://boiling-lake-37451.herokuapp.com/">
                                                <i id="githubLeft" className="fa fa-globe"></i>

                                            </a>
                                            <a href="https://github.com/sialbul/friendFinder" title="Visit GitHub"
                                                target="blank"><i id="githubLeft" className="fa fa-github"></i></a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  */}
                        <Col xs={12} sm={12} md={12} lg={6} xl={4}>
                            <div className="container">
                                <img className="portfolioImg" src={bamazon} alt="Bamazon" />
                                <div className="overlay">
                                    <div className="text">
                                        <p id="exp">The goal was to create an Amazon-like
                                            storefront
                                            using
                                            Node.js and MySQL.
                                            <br /> </p>
                                        <a href="https://github.com/sialbul/bamazon" title="Visit GitHub"
                                            target="blank">
                                            <i id="githubLeft" className="fa fa-github"></i></a>

                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} sm={12} md={12} lg={6} xl={4}>
                            <div className="container">
                                <img className="portfolioImg" src={liriNode} alt="liri-node" />
                                <div className="overlay">
                                    <div className="text">
                                        <p id="exp"> LIRI is a command line node app that
                                            takes in
                                            parameters
                                            and gives back data.
                                            Javascript Nodejs <br />
                                            Node-Spotify-API Request Moment
                                            DotEnv
                                            Bands in Town API, OMDB API.
                                            <br /></p>
                                        <a href="https://github.com/sialbul/liri-node-app" title="Visit GitHub"
                                            target="blank"><i id="githubLeft" className="fa fa-github"></i></a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6} xl={4}>
                            <div className="container">
                                <img className="portfolioImg" src={rps} alt="Rock Paper Siccors" />
                                <div className="overlay">
                                    <div className="text">
                                        <p id="exp"> Rock Paper Scissors game is
                                            an online multiplayer game with the help of
                                            Firebase.
                                            <br /></p>
                                        <a target="blank" title="Visit Website"
                                            href="https://sialbul.github.io/RPS-Multiplayer/">
                                            <i id="githubLeft" className="fa fa-globe"></i>
                                        </a>
                                        <a href="https://github.com/sialbul/RPS-Multiplayer" title="Visit GitHub"
                                            target="blank"><i id="githubLeft" className="fa fa-github"></i></a>

                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} sm={12} md={12} lg={6} xl={4}>
                            <div className="container">
                                <img className="portfolioImg" src={starwars} alt="Starwars" />
                                <div className="overlay">
                                    <div className="text">
                                        <p id="exp"> Star Wars RPG game using HTML5, CSS,
                                            Bootstrap and jQuery.
                                            <br /></p>
                                        <a target="blank" title="Visit Website"
                                            href="https://sialbul.github.io/unit-4-game/">
                                            <i id="githubLeft" className="fa fa-globe"></i>
                                        </a>
                                        <a href="https://github.com/sialbul/unit-4-game" title="Visit GitHub"
                                            target="blank"><i id="githubLeft" className="fa fa-github"></i></a>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} sm={12} md={12} lg={6} xl={4}>
                            <div className="container">
                                <img className="portfolioImg" src={cityguide} alt="City Guide" />
                                <div className="overlay">
                                    <div className="text">
                                        <p id="exp">This application takes a city that the user
                                            enters and retrieves relevant data from multiple APIs to
                                            show information on the city entered.
                                            <br /></p>
                                        <a target="blank" title="Visit Website"
                                            href="https://kandrac.github.io/CityGuide/">
                                            <i id="githubLeft" className="fa fa-globe"></i>

                                        </a>
                                        <a href="https://github.com/Kandrac/CityGuide" title="Visit GitHub"
                                            target="blank"><i id="githubLeft" className="fa fa-github"></i></a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6} xl={4}>
                            <div className="container">
                                <img className="portfolioImg" src={horrorgif} alt="Horror Giphy" />
                                <div className="overlay">
                                    <div className="text">
                                        <p id="exp">This app is implemented using the GIPHY API
                                            to make a dynamic web page that populates with horror
                                            gifs.<br />
                                            It calls the GIPHY API and use JavaScript and jQuery
                                            to change the HTML of the site.
                                            <br /></p>
                                        <a target="blank" title="Visit Website"
                                            href="https://sialbul.github.io/giphy-API/">
                                            <i id="githubLeft" className="fa fa-globe"></i>
                                        </a>
                                        <a href="https://github.com/sialbul/giphy-API" title="Visit GitHub"
                                            target="blank"><i id="githubLeft" className="fa fa-github"></i></a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6} xl={4}>
                            <div className="container">
                                <img className="portfolioImg" src={hangman} alt="Hangman" />
                                <div className="overlay">
                                    <div className="text">
                                        <p id="exp"> Hangman Game with 80`s music. Used Javascript,
                                            HTML and CSS.
                                            <br /></p>
                                        <a target="blank" title="Visit Website"
                                            href="https://sialbul.github.io/Word-Guess-Game/">
                                            <i id="githubLeft" className="fa fa-globe"></i>

                                        </a>
                                        <a href="https://github.com/sialbul/Word-Guess-Game" title="Visit GitHub"
                                            target="blank"><i id="githubLeft" className="fa fa-github"></i></a>

                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>


        );
    }
}

export default Portfolio;