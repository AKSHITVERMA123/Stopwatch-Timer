
import React, { Component } from 'react';
import TataPunch from '../assets/images/TATAPunch1.jpg';
class TATAPunchDescriptionComp extends Component {
    render() {
        return (
            <div>
                <h1>Tata Punch</h1>
                
                <img src={TataPunch} alt="Tata Punch" />

                <h2>Specifications</h2>
                <ul>
                    <li>Engine: 1.2L Revotron Petrol</li>
                    <li>Transmission: 5-speed Manual / 5-speed AMT</li>
                    <li>Dimensions: Length - XXXXmm, Width - XXXXmm, Height - XXXXmm</li>
                    {/* Add more specifications */}
                </ul>

                <h2>Features</h2>
                <p>Some features of the Tata Punch include...</p>
                
                {/* Add more information and details */}

                <h2>Overview</h2>
                <p>
                    The Tata Punch is a compact SUV manufactured by Tata Motors. It was first introduced in XXXX and is designed to offer a rugged yet stylish option in the subcompact SUV segment.
                </p>

                <h2>Design</h2>
                <p>
                    The Tata Punch features a bold and muscular design with SUV-inspired styling cues. Its high ground clearance, sculpted body lines, and rugged elements make it suitable for both urban and off-road adventures.
                </p>

                {/* Include more sections and details */}

            </div>
        );
    }  
}

export default TATAPunchDescriptionComp;
