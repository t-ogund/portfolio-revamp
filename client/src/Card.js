import React from 'react';
import projects from './project-object';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <React.Fragment>
                <div class="card" style={{width: "18em"}}>
                        <img src={this.props.image} class="card-img-top layer" alt="..."/>
                        <div class="card-img-overlay"></div>
                    <div class="card-body">
                        <p style={{textAlign: "center", fontWeight: "500", fontSize: "1.2rem"}}class="card-text">{this.props.title}</p>
                        <p style={{textAlign: "center"}}>{this.props.tech}</p>
                        <div class="btn-group d-flex justify-content-between" role="group" aria-label="Basic example">
                            <button type="button" class="btn project-btn" style={{width: "45%"}}><i class="fas fa-eye"></i> Project</button>
                            <button type="button" class="btn btn-secondary project-btn" style={{width: "45%"}}> Github</button>
                        </div>

                    </div>
                </div>

                
            </React.Fragment>
        )
    }
}

export default Card

