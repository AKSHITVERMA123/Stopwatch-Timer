import React from 'react';
import "../Component/style.css";
import Facebook from '../Images/facebook.png';
import instagram from '../Images/instagram.png';
import linkedin from "../Images/linkedin.png";
import twitter from '../Images/twitter.png';
import youtube from '../Images/youtube.png';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import { Link } from 'react-router-dom';

// import { FaInstagram } from 'react-icons/fa';
function FooterComp() {
  return (
    <div className="Footer" style={{ background: "#3d0301", borderRadius: "1px", height: "600px", color: "#809898" }}>
      <br></br><br></br>
      <h3 style={{ color: 'darkviolet' }}>Why from Us ? </h3>
      <p className='FooterData'>
        {/* You must have chose our website to find and compare the cars for buying the best available cars.
        Bacause many service provider comapare on only some features but we are helping you to choose the best cars
        based on<span style={{ float: "left", fontSize: "15px" }}>each and every parameter such as based on Brand,
          based on FuelType, based on Type, based on Cost and many more.. We provide you to choose the best car , by
          giving some extra features like  Brand , Miledge , Speed etc.</span></p> */}
      Our services are very much improved than others and we provides more valuable things to you.
      </p>
      <div className="d-flex w-100 justify-content-center">
      <div className='d-flex flex-column align-items-center h-25' style={{background: "transparent"}}>
        <h4>Quick Links</h4>
      <Link id="Home" className="text-primary fs-6" title="Go to Home" to="/"> Home</Link>
                <Link id="About" className="text-primary fs-6" title="Go to About" to="/about"> About</Link>
                <Link id="Effect" className="text-primary fs-6" title="Go to EffectHook" to="/UseEffect"> Effect</Link>
                <Link id="Ref" className="text-primary fs-6" title="Go to RefHook" to="/UseRef"> Ref</Link>
                <Link id="Services" className="text-primary fs-6" title="Go to Services" to="/services"> Services</Link>
      </div>
      </div>
      <span className='float-start text-light d-block mb-1'>For More Information , Click on these links :</span>
      <br></br><br></br><br></br>
      <div className="social-list w-25">
          <a href="http://www.facebook.com" className="social-link">
            <img className='sociallink' src={Facebook} alt="facebook"></img>
          </a>
          <a href="http://www.instagram.com" className="social-link">
            <img className='sociallink' src={instagram} alt="instagram"></img>
          </a>
          <a href="http://www.linkedin.com/in/akshit-verma-26470727a/" className="social-link">
            <img className='sociallink' src={linkedin} alt="linkedin" style={{mixBlendMode: "hard-light" , opacity: 0.5}}></img>
          </a>
          <a href="http://www.twitter.com" className="social-link">
            <img className='sociallink' src={twitter} alt="twitter"></img>
          </a>
          <a href="http://www.youtube.com" className="social-link">
            <img className='sociallink' src={youtube} alt="youtube"></img>
          </a>
        </div>
        <div className='d-flex flex-column row-gap-3'>
      <strong className="float-start d-block">Address :</strong>
      <div className="Address d-flex flex-column column-gap-2">
        <label className='fs-5 py-0 my-2'>Near Anand Nagar Metro Station<br></br> Kothrud , Pune (Maharastra) India
          <br></br>Call : 08097967543  </label>
      <span>ASVCars.com is optimized for car searching and comparison website. Examples might be simplified to improve search and compare. Comparisons, and understanding of cars are constantly reviewed to avoid errors, and avoid to choose the wrong car at any rate , but we cannot warrant full correctness of all content. While using ASVCars.com, you agree to have read and accepted our <a href='terms&conditions'>terms of use and conditions</a>, <a href='cookie&privacy'>cookie and privacy policy.</a></span>
      <label className='py-0 my-2' style={{ color: "#fff", marginLeft: "30px" }}>&#169;Copyright ASVCars.com 2024. All Rights Reserved. </label>
    </div>
    </div>
    </div>
  )
}

export default FooterComp;