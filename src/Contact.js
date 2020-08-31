import React from 'react';
import { Button, Col, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            message: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()

        const { firstName, lastName, email, phoneNumber, message } = this.state
    }

    render() {
        return(
            <div className="container-fluid bg-dark handshake">
                <div className="row" id="contact">
                    <div className="col d-flex justify-content-center mt-5">
                        <h2>Contact Me</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center">
                        <h3>Let's bring your ideas to life!</h3>
                    </div>
                </div>

                <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-sm-12 d-flex justify-content-center">
                        <Form onSubmit={this.handleSubmit} className="col-xs-6 col-sm-8 col-md-8 mb-3 form-style" model="feedbackForm">
                            <Row className="form-group">
                                <Label htmlFor="firstName" md={2}>First</Label>
                                <Col md={10}>
                                    <Input style={{backgroundColor: "transparent", color: "white"}} className="input" type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="lastName" md={2}>Last</Label>
                                <Col md={10}>
                                    <Input style={{backgroundColor: "transparent", color: "white"}} type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} />
                                </Col>
                            </Row>
                            
                            <Row className="form-group">
                                <Label htmlFor="phoneNumber" md={2}>Phone</Label>
                                <Col md={10}>
                                    <Input style={{backgroundColor: "transparent", color: "white"}} type="text" name="phoneNumber" placeholder="Phone Number" onChange={this.handleChange} />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>E-Mail</Label>
                                <Col md={10}>
                                    <Input style={{backgroundColor: "transparent", color: "white"}} type="email" name="email" placeholder="E-Mail Address" onChange={this.handleChange} />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label for="message" md={2}>Message</Label>
                                <Col md={10}>
                                    <Input style={{backgroundColor: "transparent", color: "white"}} type="textarea" name="message" onChange={this.handleChange} />
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col className="d-flex justify-content-center">
                                    <Button className="submit-button" type="submit">Submit</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
                
            </div>




            </div>
        )
    }
}

// class Form_Component extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return(
            
//         )
//     }
// }

export default Contact