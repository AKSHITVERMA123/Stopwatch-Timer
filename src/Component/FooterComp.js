import React from 'react';
import "../Component/style.css";
import Facebook from '../Images/facebook.png';
import instagram from '../Images/instagram.png';
import twitter from '../Images/twitter.png';
import youtube from '../Images/youtube.png';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";

// import { FaInstagram } from 'react-icons/fa';
function FooterComp() {
  return (
    <div className="Footer" style={{ background: "#3d0301", borderRadius: "1px", height: "380px", color: "#809898" }}>
      <br></br>
      <h3 style={{ color: 'darkviolet' }}>Why from Us ? </h3>
      <p className='FooterData'>
        You must have chose our website to find and compare the cars for buying the best available cars.
        Bacause many service provider comapare on only some features but we are helping you to choose the best cars
        based on<span style={{ float: "left", fontSize: "15px" }}>each and every parameter such as based on Brand,
          based on FuelType, based on Type, based on Cost and many more.. We provide you to choose the best car , by
          giving some extra features like  Brand , Miledge , Speed etc.</span></p>
      <br></br>
      <strong>Address :</strong><span style={{ color: "#fff", display: "block", marginLeft: "400px" }}>For More Information , Click on these links :</span>
      <div className="links d-flex">
        <div className="social-list">
          <a href="http://www.facebook.com" className="social-link">
            <img className='sociallink' src={Facebook} alt="facebook"></img>
          </a>

          <a href="http://www.instagram.com" className="social-link">
            <img className='sociallink' src={instagram} alt="instagram"></img>
          </a>
          <a href="http://www.twitter.com" className="social-link">
            <img className='sociallink' src={twitter} alt="twitter"></img>
          </a>
          <a href="http://www.youtube.com" className="social-link">
            <img className='sociallink' src={youtube} alt="youtube"></img>
          </a>
        </div>
      </div>
      <div className="Address">
        <label className='fs-5 address'>Near Anand Nagar Metro Station<br></br> Kothrud , Pune (Maharastra) India
          <br></br>Call : 08097967543  </label>
      </div>
      <span>ASVCars.com is optimized for car searching and comparison website. Examples might be simplified to improve search and compare. Comparisons, and understanding of cars are constantly reviewed to avoid errors, and avoid to choose the wrong car at any rate , but we cannot warrant full correctness of all content. While using ASVCars.com, you agree to have read and accepted our <a href='terms&conditions'>terms of use and conditions</a>, <a href='cookie&privacy'>cookie and privacy policy.</a></span>
      <label style={{ color: "#fff", marginLeft: "30px" }}>&#169;Copyright ASVCars.com 2024. All Rights Reserved. </label>
    </div>
  )
}

export default FooterComp;