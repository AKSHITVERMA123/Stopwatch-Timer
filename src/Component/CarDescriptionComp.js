
import React from 'react';
import Nexon from '../assets/images/NexonCar2.jpg';
import '../components/style.css';
const CarDescriptionComp = () => {

    function compareCar() {
    let image=document.getElementById("ComparethisImage").innerHTML;
    // document.write(image);
    }
    
    return (
        <div>
            <div className="C1" style={{width: "100%"}}>
                <h1>Tata Nexon</h1>
                <img src={Nexon} alt="Nexon car image" title='TATA Nexon' style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
                <table border="4" align='center'>
                    <thead>
                        <tr style={{border: "3.2px solid green"}}>
                            <th>Specification</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Engine</td>
                            <td>1199 - 1497 CC</td>
                        </tr>
                        <tr>
                            <td>Mileage</td>
                            <td>17.01 - 24.08 Kmpl</td>
                        </tr>
                        <tr>
                            <td>Transmission</td>
                            <td>Manual / Automatic</td>
                        </tr>
                        <tr>
                            <td>Fuel Type</td>
                            <td>Petrol / Diesel</td>
                        </tr>
                        <tr>
                            <td>Max Power</td>
                            <td>113.31bhp@3750rpm</td>
                        </tr>
                        <tr>
                            <td>Seating Capacity</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>Drive Type</td>
                            <td>2WD</td>
                        </tr>
                        <tr>
                            <td>Boot Space</td>
                            <td>382 Litres</td>
                        </tr>
                        <tr>
                            <td>Fuel Tank Capacity</td>
                            <td>44 Litres</td>
                        </tr>
                        <tr>
                            <td>Body Type</td>
                            <td>SUV</td>
                        </tr>
                        <tr>
                            <td>Ground Clearance</td>
                            <td>208 mm</td>
                        </tr>
                    </tbody>
                </table>
                <p>
                The Tata Nexon is a subcompact crossover SUV produced by the Indian automaker Tata Motors since 2017. It is the first crossover SUV from the brand and occupies the sub-4 meter crossover SUV segment in India1</p> <p>The Nexon made its debut as a prototype exhibited at the Auto Expo 2014. The final model was presented in February 2016. The Nexon is based on the revised Tata X1 platform that debuted in 1998 with the Indica model and was adopted by other Indian brand cars. It uses an independent MacPherson dual-path strut with coil spring front suspensions and rear twist-beam with coil spring and shock absorber. The wheelbase is measured at 2,498 mm (98.3 in). It is characterized by two-tone paint (optional), dual halogen headlamps with projector low beams, and large chrome bands along the side2</p> <p>The engines are developed by Tata Motors and Austrian engineering company AVL: the petrol engine is the 1.2 L Revotron three-cylinder turbo 12-valve that delivers 81 kW (109 hp; 110 PS) and 170 N⋅m (125 lbf⋅ft) of maximum torque combined with a 6-speed manual or 6-speed automated manual transmission (AMT); the diesel engine is a 1.5 L Revotorq four-cylinder common rail 16-valve that delivers 81 kW (109 hp; 110 PS) and 260 N⋅m (192 lbf⋅ft) of maximum torque, also paired with a 6-speed manual or 6-speed Automated manual transmission (AMT). Tata Nexon is available in eight variants for manual transmission – XE, XM, XMS, XM+S, XZ+, XZ+ LUX, and XZ+LUXS (XZ & XZ (O) are now discontinued). The Nexon has three special editions named Dark, Red Dark & Kaziranga. The Nexon in AMT has the same variants except XE and has a 'A' added to the variant (XZA+, XMA). The vehicle has three driving modes City, Eco & Sports. In 2018, Tata added a sunroof option2
                </p>
                <p>The Tata Nexon price for the base model starts at Rs. 8.15 Lakh and the top model price goes upto Rs. 15.60 Lakh (Avg. ex-showroom)3</p>
                {/* <button type="button" name="Nexon">Nexon</button> */}
            </div>
        <div onClick={compareCar}>
        </div>
        </div>
    );
}

export default CarDescriptionComp;
