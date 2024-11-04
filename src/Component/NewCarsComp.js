
import React from 'react';
import MarutiImageCar from '../assets/images/MarutiSuzukiCar.jpg';
const NewCarsComp = () => {
    function carImage() {
        document.write("<h3>You have Signed Up sucessfully</h3><br></br>");
        document.write("<label>Welcome to you User</label>");
        document.write("<h2>Add Cars </h2>");
        document.write("<h3>Maruti Ertiga</h3>");
    let images=document.getElementById("SuzukiCar").insertAdjacentHTML(0);
        document.write(images);
            // document.getElementById("SuzukiCar").innerHTML="<img src='D:/A Assignment/WBT (Web Based Technology)/WebDevelopement/reactpro/src/assests/images/MarutiSuzukiCar.jpg' title='Maruti Suzuki Car Image' alt='Maruti Suzuki Car Image' style='height:150px, width:150px'></img>"
       }      
    return (

        <div>
            <button onClick={carImage}>Show Car Description</button>
            <img src={MarutiImageCar} id='SuzukiCar' title='Maruti Suzuki Car Image' alt='Maruti Suzuki Car Image' style={{height:"150px", width:"150px"}}></img>
        </div>
    )
}

export default NewCarsComp;
