import React from 'react';
import Card from  './Card';
import projects from './project-object';

class Projects extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(

            // map

            <React.Fragment>
                <div className="container mt-5 mb-5 project-container">
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