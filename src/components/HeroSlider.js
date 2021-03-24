import React, { useState, useEffect } from 'react'
import { Button, Jumbotron } from 'react-bootstrap';
import OutputStepModels from './OutputStepModels'


const HeroSlider = (props) => {
    const [showState, setShowState] = useState(false);



    const buttonClickedHandler = (info) => {
        const showshow = setShowState(info);
        console.log("setShowState()", showshow)
    }



    return (
        <div><Jumbotron>
            <h1>Hello, world!</h1>
            <p>
                This is a simple hero unit<br />
                <OutputStepModels buttonClicked={buttonClickedHandler("Info")} />
                <a href="/#" className="card-link" onClick={buttonClickedHandler("Info")} id="homeShoutBtn">GET STARTED</a>

            </p>
        </Jumbotron></div>
    )

}

export default HeroSlider