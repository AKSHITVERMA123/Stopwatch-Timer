
import React from 'react';
import TataTigor from '../assets/images/TataTigorCar.jpg';
const TATATigorDescriptionComp = () => {
    return (
            <div>
                <h1>Tata Tigor</h1>
                
                <img src={TataTigor} alt="Tata Tigor" />

                <h2>Specifications</h2>
                <ul>
                    <li>Engine: 1.2L Revotron Petrol / 1.05L Revotorq Diesel</li>
                    <li>Transmission: 5-speed Manual / 5-speed AMT</li>
                    <li>Dimensions: Length - 3993mm, Width - 1677mm, Height - 1532mm</li>
                    {/* Add more specifications */}
                </ul>

                <h2>Features</h2>
                <p>Some features of the Tata Tigor include...</p>
                
                {/* Add more information and details */}

                <h2>Overview</h2>
                <p>
                    The Tata Tigor is a compact sedan manufactured by Tata Motors. It was first introduced in 2017 and is known for its stylish design, spacious interiors, and fuel-efficient engines.
                </p>

                <h2>Design</h2>
                <p>
                    The Tata Tigor features a unique design with a coupe-like roofline and bold character lines. Its sleek appearance is complemented by elements such as the signature grille, projector headlamps, and LED tail lamps, giving it a sophisticated look on the road.
                </p>

                {/* Include more sections and details */}

            </div>
        );
    }
    
export default TATATigorDescriptionComp;
