import React from 'react';
import './style.css';
import { Row, Col } from 'react-bootstrap';
import css from "./css3.png";
import html from "./html.png";
import jquery from "./jquery.png";
import node from "./node.png";
import react from "./react.png";
import jv from "./jv.png"
import Typist from 'react-typist';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};



function Skills() {
    return (
        // <RemoveScroll>
        <div id="skillsHead">
            <br /><br />
            <Typist>
                <h2 id="head">SKILLS</h2>
            </Typist>
            <br /> <br /> <br />

            <div id="skillsDiv">
                <Carousel   infinite={true} swipeable={true} arrows={false} showDots={true} autoPlay={true} autoPlaySpeed={2000}	responsive={responsive}>
                    <div>
                        <Col xs={12} sm={12} md={8} lg={10} xl={8}>
                            <img className="skills" src={css} alt="css" title="CSS" />
                        </Col>
                    </div>
                    <div>
                        <Col xs={12} sm={12} md={8} lg={10} xl={8}>
                            <img className="skills" src={html} alt="html" title="HTML" />
                        </Col>
                    </div>
                    <div>
                    <Col xs={12} sm={12} md={8} lg={10} xl={8}>
                            <img className="skills" src={jquery} alt="jquery" title="jQuery" />
                        </Col>
                    </div>
                    <div>
                    <Col xs={12} sm={12} md={8} lg={10} xl={8}>
                            <img className="skills" src={node} alt="node" title="Node.js" />
                        </Col>
                    </div>
                    <div>
                    <Col xs={12} sm={12} md={8} lg={10} xl={8}>
                            <img className="skills" src={react} alt="react" title="React.js" />
                        </Col>
                    </div>
                    <div>
                    <Col xs={12} sm={12} md={8} lg={10} xl={8}>
                            <img className="skills" src={jv} alt="jv" title="JavaScript" />
                        </Col>
                    </div>
                </Carousel>

                <br /><br />
            </div>
        </div>
        // </RemoveScroll>
    );
}

export default Skills;