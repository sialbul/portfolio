import React, { Component } from 'react';
import "./style.css";
import { Nav, Navbar } from "react-bootstrap";
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" >
                    <Navbar.Brand href="/"><h3>M. SIBEL BASLAMISLI</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            {/* <Nav.Link href="/aboutme">About Me</Nav.Link>
                            <Nav.Link href="/skills">Skills</Nav.Link> */}
                            <Nav.Link href="/portfolio">Projects</Nav.Link>
                            <Nav.Link href="https://drive.google.com/open?id=1HW6APT-p0XFPqzhgewonfrkSzXMMnlcT"
                                target="blank" download id="resume">Resume</Nav.Link>
                            <div>
                                <Button color="warning" onClick={this.toggle}>Contact</Button>
                                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                    <ModalHeader toggle={this.toggle}>
                                        <h2><strong>M.SIBEL BASLAMISLI</strong></h2>
                                    </ModalHeader>
                                    <ModalBody>
                                        <div>
                                            &#9742; 216 802 9268<br /><br />
                                            <a href="mailto:sibaslamisli@gmail.com"> &#9993;
                                                        sibaslamisli@gmail.com </a><br /><br />
                                            44124 CLEVELAND/OH<br /><br />
                                            <a href="https://www.linkedin.com/in/m-sibel-baslamisli-a14b6a90/" alt="Linkedin"
                                                target="blank"> <i className="fa fa-linkedin-square"></i></a>

                                            <a href="https://github.com/sialbul" target="blank" alt="Github"
                                                id="modalLink"><i className="fa fa-github"></i></a>
                                        </div>
                                    </ModalBody>
                                </Modal>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div >

        )
    }
}

export default Header;