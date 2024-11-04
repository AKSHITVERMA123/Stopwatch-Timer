import React, { Component } from "react";
// import { useRef } from "react";

export class Useref extends Component {
    render() {
        let count = 100;
        const inc = () => {
            let Classes = document.getElementById("count");
            if (Classes.getAttribute("className") === "count") {
                count = count + 1;
                Classes.value = count;
            }
        };

        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}
            >
                Hello Welcome, This is a class Component
                <div className="increment">
                    <button style={{ background: "#718780", padding: 0 }} onClick={inc()}>
                        Increment
                    </button>
                </div>
                <div>Count is : </div>
                <div id="count" className="count">
                    {count}
                </div>
            </div>
        );
    }
}

export default Useref;
