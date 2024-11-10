import React, { useState } from "react";
import { useRef } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
const Useref = () => {
    // const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);
    const [minutes, setMinutes] = useState(0);
    // const countColorRef = useRef(0);
    const countStartRef = useRef(null);
    document.title="Make StopWatch Timer";
    document.body.style.background="#ff5943";
    document.body.style.height="450px";
    // const inc = () => {
    //        setCount(countRef => countRef + 1);
    // };

    // const dec = () => {
    //        setCount(countRef => countRef - 1);
    // };

    const changeStart = () => {
        countStartRef.current = setInterval(() => {
            // setTime(countStartRef=> countStartRef + 1);
            setTime(time => time + 1);
        }, 1000);
        // countColorRef.current.style.background="#718780";
        // countColorRef.current.style.borderRadius="20%";
        // countColorRef.current.style.height="2em";
        // countColorRef.current.style.width="7em";
    }

    const changeStop = () => {
        clearInterval(countStartRef.current);
        countStartRef.current = null;
    }

    const changeReset = () => {
        changeStop();
        setTime(0);
    }

    if (time > 1000) {
        alert("Stopped");
        setTime(0);
        // alert(`counter is updated now to ${time}`);
    }
    if (time > 59) {
        setMinutes(minutes+1);
        setTime(0);
    }

    const changeColor = () => {
        let id = document.getElementsByClassName("BTN");
        if (id.item(0).innerHTML === "Start") {
            id.item(0).style.background = "linear-gradient(120deg, rgb(110,50,340) 45%,rgba(200,100,320,0.9) 65%)";
        }
    }
    const changesColor = () => {
        let id = document.getElementsByClassName("BTN");
        if (id.item(1).innerHTML === "Stop") {
            id.item(1).style.background = "linear-gradient(120deg, rgb(110,50,340) 45%,rgba(200,100,320,0.9) 65%)";
        }
    }
    const changerColor = () => {
        let id = document.getElementsByClassName("BTN");
        if (id.item(2).innerHTML === "Reset") {
            id.item(2).style.background = "linear-gradient(120deg, rgb(110,50,340) 45%,rgba(200,100,320,0.9) 65%)";
        }
    }

    const cbcolor = () => {
        let id = document.getElementById("start");
        let id2 = document.getElementById("stop");
        let id3 = document.getElementById("reset");
        if (id.innerHTML === "Start") {
            id.style.background = "#322845";
        } if (id2.innerHTML === "Stop") {
            id2.style.background = "#322845";
        }
        if (id3.innerHTML === "Reset"){
            id3.style.background = "#322845";
        }
    }

    // const addZero = () => {
    //     if(time<10){
    //       return true;
    //     }
    // }
// #4819ff
    return (
        <div className="Stopwatch" style={{margin: "160px auto", background: "#7a48bb",height: "360px", width: "350px", border: "2px solid red", borderRadius:"5%"}}>
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "55vh" }}>
            Hello Welcome to you in <h4 className="d-inline">Stopwatch Clock</h4>
            <span className="mx-auto d-flex column-gap-2">Your Timer is :
            <h2 className="m-0 p-0 w-50">
               
                0: {minutes} :  
                {/* {
                    addZero ? '0'+time : time
                } */}
                 {time} seconds
            </h2>
            </span>
            <div className="increment d-flex flex-column justify-content-center align-items-center">
                <button id="start" className="BTN" style={{ background: "#322845", padding: 0, borderRadius:"30%", width: "140px" }} onClick={changeStart} onMouseOver={changeColor}
                    onMouseOut={cbcolor}>
                    Start
                </button>
                <button id="stop" className="BTN" style={{ background: "#322845", padding: 0 , borderRadius:"30%", width: "140px"}} onClick={changeStop} onMouseOver={changesColor}
                    onMouseOut={cbcolor}>
                    Stop
                </button>
                <button id="reset" className="BTN" style={{ background: "#322845", padding: 0, borderRadius:"30%", width: "140px" }} onClick={changeReset} onMouseOver={changerColor}
                    onMouseOut={cbcolor}>
                    Reset
                </button>
            </div>
        </div>
        </div>
    );
}

export default Useref;