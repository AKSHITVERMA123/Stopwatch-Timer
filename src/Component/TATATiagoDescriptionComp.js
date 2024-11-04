
import React from 'react';
import TataTiago from '../assets/images/TATATiago.jpg';
class TataTiagoDescriptionComp extends React.Component {
    render() {
        return (
            <div>
                <h1>Tata Tiago</h1>
                
                <img src={TataTiago} alt="Tata Tiago" />

                <h2>Specifications</h2>
                <ul>
                    <li>Engine: 1.2L Revotron Petrol / 1.05L Revotorq Diesel</li>
                    <li>Transmission: 5-speed Manual / 5-speed AMT</li>
                    <li>Dimensions: Length - 3746mm, Width - 1647mm, Height - 1535mm</li>
                    {/* Add more specifications */}
                </ul>

                <h2>Features</h2>
                <p>Some features of the Tata Tiago include...</p>
                
                {/* Add more information and details */}

                <h2>Overview</h2>
                <p>
                    The Tata Tiago is a hatchback car manufactured by Tata Motors. It was first introduced in 2016 and has become one of the popular choices in the hatchback segment due to its stylish design, fuel efficiency, and affordable pricing.
                </p>

                <h2>Design</h2>
                <p>
                    The Tata Tiago features a modern and youthful design with sleek lines and a dynamic silhouette. Its signature elements include the honeycomb grille, swept-back headlamps, and sharp character lines, giving it a distinctive appearance on the road.
                </p>

                {/* Include more sections and details */}

            </div>
        );
    }
}

export default TataTiagoDescriptionComp;