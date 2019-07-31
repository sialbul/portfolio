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

function Skills() {
    return (
        <div>
            <Typist>
                <h2>Skills</h2>
            </Typist>
            <br /> <br />
            <div id="skillsDiv">

                <Row>
                <Col xs={4} sm={3} md={2}  lg={2} xl={2}>
                        <img className="skills" src={css} alt="css" title="CSS" />
                    </Col>
                    <Col xs={4} sm={3} md={2}  lg={2} xl={2}>
                        <img className="skills" src={html} alt="html" title="HTML" />
                    </Col>
                    <Col xs={4} sm={3} md={2}  lg={2} xl={2}>
                        <img className="skills" src={jquery} alt="jquery" title="jQuery" />
                    </Col>
                    <Col xs={4} sm={3} md={2}  lg={2} xl={2}>
                        <img className="skills" src={node} alt="node" title="Node.js" />
                    </Col>
                    <Col xs={4} sm={3} md={2}  lg={2} xl={2}>
                        <img className="skills" src={react} alt="react" title="React.js" />
                    </Col>
                    <Col xs={4} sm={3} md={2}  lg={2} xl={2}>
                        <img className="skills" src={jv} alt="jv" title="JavaScript" />
                    </Col>

                </Row>
            </div>
        </div>
    );
}

export default Skills;