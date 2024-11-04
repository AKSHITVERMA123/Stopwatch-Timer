import React from 'react';
import "../Components/style/style.css";

const Sun = () => {
    let props = '<div name="satellite" className="satellite"></div>';
    let doc = document.body.getAttribute("div");
    if (doc) {

        doc.replace(props);
    }
    const MoveShade = () => {
        document.getElementsByName("satellite").item(0).style.animationName = "stop";
    }

    const animationChange = () => {

        if (document.URL === "http://localhost:4040/Sun") {
            document.getElementsByName("satellite").item(0).style.animationName = 'roundSun';
        }
        else {
            document.getElementsByName("satellite").item(1).style.animationName = 'round';
        }
        // document.getElementsByName("satellite").item(0).style.animationName = 'stopshadow';
    }
    return (
        <div id="sunDiv">
           
                <h1 className="headingSun">
                    This is Sun Satellite
                </h1>
                <div className='sunbg'>
                    <div className="Sunplanet">

                        <div name="satellite" className="satellite" onMouseOver={MoveShade} onClick={animationChange}>
                        </div>
                    </div>
                </div>
                <div className="rays">
                    {/* <span>_____  </span>
                <span>_____  </span>
                <span>_____  </span>
                <span>_____  </span>
                <span>_____  </span>
                <span>_____  </span>
                <span>_____  </span>
                <span>_____  </span>
                <span>_____  </span> */}
                </div>
        </div>
    )
}

export default Sun;