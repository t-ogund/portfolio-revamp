import React from 'react';
import {Col, Row} from 'reactstrap';
import Navbar_Component from "./Navbar";
import Footer from "./Footer";

function About(props) {
    return (
        <div className="container-fluid">
            <Row>
                <Col lg={12}>
                    <Navbar_Component />
                </Col>
                </Row>
                <Row>

                    <Col className="about-text" md={6}>
                        <p>Hi, my name is Toye Ogundepo. I'm a web developer who like bringing websites and applications to life. I enjoy taking on new challenges and finding solutions to complex problems. If you are in need of a website or web application, feel free to contact me.</p>
                    </Col>
                    <Col className="about-image" md={6}>
                        {/* <img src={props.image} /> */}
                    </Col>
                </Row>
                <Row>
                <Footer />
            </Row>
        </div>
    )
}

export default About