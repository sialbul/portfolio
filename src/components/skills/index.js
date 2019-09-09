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
import {RemoveScroll} from 'react-remove-scroll';

function Skills() {
    return (
        // <RemoveScroll>
        <div id="skillsHead">
            <br /><br />
            <Typist>
                <h2 id="head">Skills</h2>
            </Typist>
            <br /> <br /> <br />

            <div id="skillsDiv">
                <Row>                   
                    <Col xs={3} sm={3} md={2} lg={2} xl={2}>
                        <img className="skills" src={css} alt="css" title="CSS" />
                    </Col>
                    <Col xs={3} sm={3} md={2} lg={2} xl={2}>
                        <img className="skills" src={html} alt="html" title="HTML" />
                    </Col>
                    <Col xs={3} sm={3} md={2} lg={2} xl={2}>
                        <img className="skills" src={jquery} alt="jquery" title="jQuery" />
                    </Col>
                    <Col xs={3} sm={3} md={2} lg={2} xl={2}>
                        <img className="skills" src={node} alt="node" title="Node.js" />
                    </Col>
                    <Col xs={3} sm={3} md={2} lg={2} xl={2}>
                        <img className="skills" src={react} alt="react" title="React.js" />
                    </Col>
                    <Col xs={3} sm={3} md={2} lg={2} xl={2}>
                        <img className="skills" src={jv} alt="jv" title="JavaScript" />
                    </Col>
                </Row>
                <br /><br />
            </div>
        </div>
        // </RemoveScroll>
    );
}

export default Skills;