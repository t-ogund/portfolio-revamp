import React from 'react';
import Card from  './Card';
import projects from './project-object';
import { ReactComponent as HTML } from "./html.svg";
import { ReactComponent as CSS } from "./css-5.svg";
import { ReactComponent as JS } from "./javascript.svg";
import { ReactComponent as NODEJS } from "./nodejs.svg";
import { ReactComponent as REACT } from "./react.svg";

class Projects extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(

            // map

            <React.Fragment>
                <div className="container mt-5 mb-5 project-container">
                    <div id="tech-section">
                        <div className="row d-flex justify-content-center">
                            <div className="col-sm-3 tech-section d-flex justify-content-center">
                                <HTML style={{height: 150, width: 150}}/>
                            </div>
                            <div className="col-sm-3 tech-section d-flex justify-content-center">
                                <CSS style={{height: 150, width: 150}}/>
                            </div>
                            <div className="col-sm-3 tech-section d-flex justify-content-center">
                                <JS style={{height: 150, width: 150}}/>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-sm-3 tech-section d-flex justify-content-center">
                                <NODEJS style={{height: 170, width: 170, paddingBottom: "0px"}}/>
                            </div>
                            <div className="col-sm-3 tech-section d-flex justify-content-center">
                                <REACT style={{height: 170, width: 170, paddingBottom: "0px"}}/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row" id="projects">
                        <div className="col-md-12 d-flex justify-content-center mb-5">
                            <h2 className="project-header">Projects</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 mb-3 d-flex justify-content-center">
                            <Card title="Starwatch" tech="Bootstrap, Javascript, API" image="./starwatch-standard.jpg"/>
                        </div>
                        <div className="col-lg-4 mb-3 d-flex justify-content-center">
                            <Card title="Weather App" tech="HTML, CSS, Javascript, API" image="./weather-app.jpg"/>
                        </div>
                        <div className="col-lg-4 mb-3 d-flex justify-content-center">
                            <Card title="Restaurant Website" tech="Bootstrap, Javascript" image="./restaurant-site.jpg"/>
                        </div>
                    </div>
                </div>
                
                
            </React.Fragment>
        )
    }
}

export default Projects