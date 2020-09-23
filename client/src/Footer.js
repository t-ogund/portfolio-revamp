import React from 'react';
import { Container, Row, Col } from 'reactstrap';


class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container-fluid footer">
                <div className="row footer-icons">
                    <div className="col">
                    </div>
                    <div className="col d-flex justify-content-center align-items-center mt-5">
                        <a onClick={ ()=> Event(this.props.category, this.props.action, this.props.label)} href="https://www.linkedin.com/in/toye-ogundepo-1bb416151/" target="_blank"><i className="fab fa-linkedin mr-4"></i></a>
                        <a onClick={ ()=> Event(this.props.category, this.props.action, this.props.label)} href="https://github.com/t-ogund" target="_blank"><i className="fab fa-github-square"></i></a>
                        {/* <a href="" target="_blank"><i className="fab fa-twitter-square ml-4"></i></a> */}
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