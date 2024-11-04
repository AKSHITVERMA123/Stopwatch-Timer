import React, { Component } from "react";
import Hoc from "./Hoc";

class RenderPropsComp extends Component{

    constructor(props) {
        super(props)
        this.state = {
            count:0
        }
    }

    incrementCount = () =>{
        this.setState((prevState)=> ({count:prevState.count+1}));
    }

    render(){
        return (<div>
            <h2>This is Render Component</h2>
            {/* <p>My Name is : {this.props.render(this.state.count,this.state.incrementCount)}</p> */}
            {/* <h3>The Counter is : <strong>{this  .state.count}</strong></h3> */}
            <p>{this.props.render(this.state.count,this.state.incrementCount)}Hover on me to Increment Counter</p>
            {/* <button type="button" onClick={this.Counter}>Click me </button> */}
            {/* <p>Counter Value is : <strong>{this.props.count}</strong></p>
              <button type="button" onClick={this.props.incrementCount}>Click me </button> */}

        </div>) 
    }
    }
    
    export default RenderPropsComp;