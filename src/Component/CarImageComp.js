
import React from 'react'
import TATAcomp from './TATAcomp';
import Nexon from '../assets/images/NexonCar2.jpg';
import CarDescriptionComp from './CarDescriptionComp';
const CarImageComp = () => {
   
    // let image=document.getElementById("Nexon").innerHTML;
    // document.write(image);
    
    return (
        <div>
             <title>Car Description</title>
                   {/* <h1>Heading 1</h1>   */}
    {/* <img src={Nexon} title="Nexon" id="TataNexonCar" class="Nexon"></img> */}
    <CarDescriptionComp/>
        </div>
    )
}

export default CarImageComp;
