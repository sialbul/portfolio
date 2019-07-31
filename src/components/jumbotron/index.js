import React from 'react';
import './style.css';
import { Jumbotron, Row, Col } from 'react-bootstrap';
import sibelgif from "./sibelgif.gif"
import Typist from 'react-typist';

function JumbotronHead() {
    return (
        <Jumbotron>
            <Row>
                <Col xs={8} sm={6} md={4} lg={3} xl={2} style={{ margin: "auto 0" }}>
                    <img id="sibelgif" src={sibelgif} alt="sibelgif" />
                </Col>
                <Col xs={12} sm={12} md={8} lg={9} xl={10}>
                    <Typist>
                        <h2> Hello! I'm Sibel Baslamisli!</h2>
                    </Typist>
                    <br />
                    <p className="jumbo_text">Web designer, developer and Environmental Engineering graduate with a strong
                            work ethic and enthusiasm for coding.</p>
                    <p className="jumbo_text">Brings creativity, problem solving skills and a drive for
                            collaboration to every project. </p>
                    <p className="jumbo_text"> Specializes in HTML, CSS, JavaScript and React.js.</p>
                    <p className="jumbo_text"> Completed a full stack bootcamp at Case Western University. </p>
                    <p className="jumbo_text"> Full stack deb development graduate from Case Western Reserve University Coding Bootcamp.</p>

                </Col>
            </Row>

        </Jumbotron>
    );
}

export default JumbotronHead;