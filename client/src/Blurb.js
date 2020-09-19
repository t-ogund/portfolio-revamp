import React from 'react';

function Blurb() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <blockquote className="blurb-text mb-5"><p className="blurb-paragraph typewriter">Hi, my name is Toye. <span class="intro">I am a web developer. </span></p></blockquote>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-4 d-flex justify-content-center" id="">
                    <a href="#projects"><i class="fas fa-chevron-down"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Blurb