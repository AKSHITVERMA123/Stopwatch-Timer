import React, { useEffect, useRef, useState } from 'react';
import "./styleCSS/style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import FooterComp from './FooterComp.jsx';
const UseEffect = () => {

    const [count, setCount] = useState(0);
    const changeColorRef =useRef("#000");
    const [color, setColor] = useState("Blue");
    document.title="Use of UseEffect Hook";
    document.body.style.background="antiquewhite";
    if (document.URL === "http://localhost:4040/UseEffect") {
        document.body.className = "select";
    }

    const LinkBGColor= () => {
        changeColorRef.current.style.background="#000";
    }
    //  It will runs on every render

    const handleClick = () => {
        setCount(count => count + 1);
        if (count >= 20) {
            setColor(color => "Red");
        }
        if (count >= 30) {
            setColor(color => "Green");
        }
    }

    const handleColor = () => {
        setColor(color => color.concat("Color"));
    }

    // const changeColor = (x) => {
    //     let id = document.getElementsByClassName("link text-primary").item(Number(x)).id;
    //     document.getElementById(id).className = "link text-danger";
    // }

    // const setBlueColor = (x) => {
    //     let id = document.getElementsByClassName("link text-danger").item(Number(x)).id;
    //     document.getElementById(id).className = "link text-primary";
    // }

    useEffect(() => {
        console.log(`Count is initialized with ${count}`);
        return () => {
            console.log(`${count} is deleted`);
        }
    }, [count, color])

    useEffect(() => {
        if (count > 30) {
            document.getElementsByClassName("btn").item(0).className = "btn btn-success";
        }
        else
            if (count > 20) {
                document.getElementsByClassName("btn").item(0).className = "btn btn-danger";
            }

        return () => {
            console.log("Wait");
        }
    })
    // onMouseOver={() => changeColor(0)} onMouseLeave={() => setBlueColor(0)}
    return (
        <div className="d-block">
        <div className='mainDiv'>
            <nav id="navigation" className="d-flex justify-content-around">
                <a id="Home" className="nav" title="Go to Home" href="/"> Home</a>
                <a id="About" className="nav" title="Go to About" href="/about"> About</a>
                <a id="Effect" className="nav" title="Go to EffectHook" href="/UseEffect/#" onClick={LinkBGColor} ref={changeColorRef}> Effect</a>
                <a id="Ref" className="nav" title="Go to RefHook" href="/UseRef"> Ref</a>
                <a id="Services" className="nav" title="Go to Services" href="/services"> Services</a>
                <a id="Others" className="nav" title="Go to Others" href="/Others"> Others</a>
            </nav>
            <button onClick={handleColor} onMouseOver={handleClick} type="button" className="btn btn-primary">
                Click Me
            </button>
            <br />
            Count is: {count}
            <br></br>
            Color is: {color}
            </div>
            <FooterComp/>
        </div>
    )
}

export default UseEffect;