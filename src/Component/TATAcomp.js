import React from 'react';
import "../Component/style.css";
import Nexon from '../Components/images/NexonCar2.jpg';
import TIAGO from '../Components/images/TATATiago.jpg';
import TataTigor from '../Components/images/TataTigorCar.jpg';
import Punch from '../Components/images/TATAPunch1.jpg';
import Search from "../Component/Search";
import SideNavBarComp from "../Component/SideNavBarComp";
import FooterComp from "../Component/FooterComp";
const TATAcomp = () => {
    return (
        <>
            <div className="Application" style={{ background: "lightgreen", height: "100em" }}>
                <nav>
                <p style={{ height: "2.2%", width: "100%", background: "skyblue", border: "2px solid blue" }}>
                    {/* <img src={Logo} style={{height:"80px", width:"80px", margin : "6px 0 0 8px", cursor :"pointer", borderRadius :"50%"}} title='ASVCars.com'></img> */}
                    {/* <h2 style={{ fontSize: "30px", alignItems: "center" }}><strong>ASV Cars For Searching and Compare the best Cars</strong></h2> */}
                </p>
                {/* <ul className='navbar'>
                    <li><a href="#home" className="active">Home</a></li>
                    <li><a href="#cars">Cars</a></li></ul> */}
                    </nav>
                <div>
                    <SideNavBarComp />
                    <Search />
                </div>
                <div className='aboutTata'>
                    <h1>About TATA</h1>
                    <p>TATA is a very big company.TATA is a well known brand. It sold a number of cars in India</p>
                </div>
                <div className='Image'>
                    <label className="srno">1 .</label>
                    <a href="/TATA/CarImage"><img src={Nexon} title='Nexon' id="Nexon" className='nexon' alt="nexon"></img></a>
                    <strong style={{ color: "darkviolet" }}>Tata Nexon</strong>
                    <label className="srno">2 .</label>
                    <a href="/TATA/Tiago"><img src={TIAGO} title="TIAGO" id="Tiago" alt="tiago"></img></a>
                    <strong style={{ color: "darkviolet" }}>Tata Tiago</strong>
                    <label className="srno">3 .</label>
                    <a href="/TATA/Punch"><img src={Punch} title='Punch' id="Punch" alt="punch"></img></a>
                    <strong style={{ color: "darkviolet" }}>Tata Punch</strong>
                    <label className="srno">4 .</label>
                    <a href="/TATA/TataTigor"><img src={TataTigor} title='TATATigor' id="TATATigor" alt="tigor"></img></a>
                    <strong style={{ color: "darkviolet" }}>Tata Tigor</strong>
                </div>
                <div className="frequentlyaskdqs">
                    <h3 style={{ color: 'darkviolet' }}>Frequently Asked Questions (FAQ)</h3>
                    <details className='FAQ'>
                        <summary>
                            What types of cars are there in my Application ?
                        </summary>
                        There are many types of cars are here such as :
                        TATA, SUZUKI, Mahindra, Hyundai, Skoda, Kia etc.
                    </details>
                    <details className='FAQ2'>
                        <summary>
                            What is comparison?
                        </summary>
                        It is a process by which we take a look at    (two or more things) closely in order to see
                        what is similar or different about them or in order to decide which one is better.
                    </details>
                    <details className='FAQ3'>
                        <summary>
                            Why do people do a comparison between two things?
                        </summary>
                        People do a comparison between two things so they can see there pro and cons. Which help and ease
                        their decision making power.
                    </details>
                    <details className='FAQ4'>
                        <summary>
                            When do people do a comparison?
                        </summary>
                        People do a comparison when they have multiple options for something that servers there needs.
                    </details>
                    <details className='FAQ5'>
                        <summary>
                            What is the 5-Star Safety Ratings program?
                        </summary>
                        The National Highway Traffic Safety Administration’s New Car Assessment Program (NCAP) created
                        the 5-Star Safety Ratings (NcapRating) program to provide consumers with information about the crash
                        protection and rollover safety of new vehicles beyond what is required by federal law. One star is
                        the lowest rating; five stars is the highest. More stars equal safer cars.
                    </details>
                </div>
                <FooterComp />
            </div>
        </>
    )
}

export default TATAcomp;