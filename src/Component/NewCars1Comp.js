
import React from 'react';
// import MarutiErtiga from '../assets/images/MarutiErtiga.jpg';
import  { Link } from 'react-router-dom';
import { useState } from 'react';
const NewCars1Comp = () => {
    const [showCar,setCar] =useState(false);
   const changeCar = () => {
    //   this.setState((prevState)=>({img:prevState.MarutiErtiga}));
   setCar(!showCar);
   };
    return (

        <div style={{float:"right" ,marginLeft: "100px"}}><br></br><br></br>
          <h3>Maruti Ertiga</h3>
          {/* <img src={MarutiErtiga} title='Maruti Ertiga' alt='Maruti Ertiga' style={{height:"150px" , width:"150px"}}></img>   */}
         <Link to ="changeCar">Remove Cars</Link>
          {/* {showCar ? (<img src={MarutiErtiga} alt="Maruti Ertiga"></img>) : (<br></br>)} */}
        </div>
       
    )
}

export default NewCars1Comp;
