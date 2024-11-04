
import React from 'react';
import '../components/style.css';
import MarutiSuzuki from '../assets/images/MarutiSuzukiCar.jpg';
const MarutiSuzukiDescriptionComp = () => {
    
    function compareCar() {
        let image=document.getElementById("ComparethisImage").innerHTML;
        // document.write(image);
        }
    return (
        <div className="C1" style={{width: "100%"}}> 
        <h1>Maruti Suzuki</h1>  
          <img src={MarutiSuzuki} alt="Maruti Suzuki Swift" style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
          <h2>Specifications</h2>
          <table border="4" align='center'>
            <tr><th>Specification</th><th>Value</th></tr><tr><td>Engine</td><td>1197 CC</td></tr><tr> 
            <td>Mileage</td><td>23.2 - 23.76 Kmpl</td></tr><tr><td>Transmission</td><td>Manual / Automatic</td>
            </tr><tr><td>Fuel Type</td><td>Petrol</td></tr><tr><td>Max Power</td><td>88.5bhp@6000rpm</td>
            </tr><tr><td>Seating Capacity</td><td>5</td></tr><tr><td>Drive Type</td><td>2WD</td></tr> 
            <tr><td>Boot Space</td><td>268 Litres</td></tr><tr><td>Fuel Tank Capacity</td><td>37 Litres</td>
</tr><tr><td>Body Type</td><td>Hatchback</td></tr><tr><td>Ground Clearance</td><td>163 mm</td></tr></table> 
                 <p>The Maruti Suzuki Swift is a subcompact hatchback produced by the Indian subsidiary of Japanese 
                    automaker Suzuki Motor Corporation since 2005. It is based on the Suzuki Swift platform and shares its engine and transmission options with the Suzuki Dzire sedan. The Swift is one of the best-selling cars in India and has won several awards, including the Indian Car of the Year in 2006, 2012 and 201912</p> <p>The Maruti Suzuki Swift is available in 10 different colours, 4 trims - Lxi, Vxi, Zxi, & Zxi+, and a 1.2L Dualjet Petrol Engine that offers the best-in-class performance and fuel efficiency. The Swift also features SmartPlay Studio, LED Projector headlamps with DRLs, Cruise Control, Precision cut 2 tone alloy wheels, and other advanced features3</p> <p>The Maruti Suzuki Swift price for the base model starts at Rs. 5.85 Lakh and the top model price goes upto Rs. 8.67 Lakh (Avg. ex-showroom)</p>
        <div onClick={compareCar}>
        </div>

            </div>  
              
    )
}

export default MarutiSuzukiDescriptionComp;
