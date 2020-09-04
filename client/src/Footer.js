import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


class Footer extends React.Component {
    constructor(props) {
        super(props);
        // this.scrollToTop = this.scrollToTop.bind(this);
    }

    render() {
        return(
            <div className="container-fluid footer">
                <div className="row footer-icons">
                    <div className="col">
                    </div>
                    <div className="col d-flex justify-content-center align-items-center mt-5">
                        <a href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin mr-4"></i></a>
                        <a href="https://github.com/" target="_blank"><i className="fab fa-github-square"></i></a>
                        <a href="" target="_blank"><i className="fab fa-twitter-square ml-4"></i></a>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center mt-5 back-to-top">
                    <a href="#"><i class="fas fa-chevron-up"></i></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 d-flex justify-content-center align-items-center mt-3">
                        <p style={{color: "white"}}><i class="far fa-copyright"></i> Toye Ogundepo 2020</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer