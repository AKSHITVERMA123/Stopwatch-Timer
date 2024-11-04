import React from 'react';
import "../Components/style/style.css";

const Moon = () => {

    const MoveShade = () => {
        if (document.URL === "http://localhost:4040/Moon") {
            document.getElementsByName("satellite").item(0).style.animationName = 'round';
        }
        else {
            document.getElementsByName("satellite").item(1).style.animationName = 'roundSun';
        }
    }
    document.body.style.background = "#161224";
    return (
        <div id="moonDiv">
                <h1 className="heading">
                    This is Moon Satellite
                </h1>
                <div className='moonbg'>
                    <div className="Moonplanet">
                        <div name="satellite" className="satellite" onMouseOver={MoveShade}>

                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Moon;