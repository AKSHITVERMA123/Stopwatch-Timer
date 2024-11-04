import React, { useState } from "react";
// import ButtonSearch from "../components/ButtonSearch";
// import { Link } from "react-router-dom";
import './style.css';
// import { useNavigate } from "react";
// import FooterComp from './FooterComp';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Router } from "react-router-dom";
// import Toyota from "../assets/images/ToyotaCarImageFront.jpg";
// import Mahindra from "../assets/images/MahindraCar.jpg";
// import SignUpComp from "./SignUpComp";
// import MarutiErtiga from "../assets/images/MarutiErtiga.jpg";
import HyundaiComp from "./HyundaiComp";
import NewCars1Comp from "./NewCars1Comp";
import SUZUKIComp from "./SUZUKIComp";
import MahindraComp from "./MahindraComp";
import KIAComp from "./KIAComp";
import SkodaComp from "./SkodaComp";
import TATAcomp from "./TATAcomp";
const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = () => {
    // Perform search operation here
    switch (searchQuery.toLowerCase()) {
      case "tata":
        setSearchResult(<TATAcomp />);
        break;
      case "suzuki":
        setSearchResult(<SUZUKIComp />);
        break;
      case "mahindra":
        setSearchResult(<MahindraComp />);
        break;
      case "hyundai":
        setSearchResult(<HyundaiComp />);
        break;
      case "skoda":
        setSearchResult(<SkodaComp />);
        break;
      case "kia":
        setSearchResult(<KIAComp />);
        break;
      default:
        setSearchResult(null);
    }
    // Reset the search query after search
    setSearchQuery("");
  };

  function ListofCars(){
    document.write("You need to sign in before you compare the cars");
    document.write("<form action='/Register' method='get' target='_blank'><br><button type='submit' style='background: rgb(100,140,200)'>Sign up </button></form> or <form action='/Login' method='get' target='_blank'><br><button type='submit' style='background: rgb(100,180,120)'>Log in</button></form>");
  }
// <form action='./signup.html' method='get'><br><button type='submit' style='background: rgb(100,140,200)'>Sign up </button> or <button type='submit' style='background: rgb(100,180,120)' onClick='Login()'>Log in</button></form>
  function newCars() {
    <NewCars1Comp/>

     document.write("<h3>Maruti Ertiga</h3>");
     document.write("<img src='https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Ertiga/10293/1697697779799/front-left-side-47.jpg' title='Maruti Ertiga' alt='Maruti Ertiga' style=height:150px; width:150px;></img>");
  }
  return (
    <div>
      <br></br>
      <label className="car">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="search your car name here" style={{width : "50%", height:"45px"}}
      />  
        <button id='Search' type='submit' onClick={handleSearch} className="o-bXKmQE o-cWRslo o-eZTujG o-bkmzIL o-dqrENu o-duzCJV o-bWgajq"><svg className="o-dlrcWp o-eoatGj o-cqgkZn o-euTeMg o-bfWOPh o-bJvRsk o-fznJFh o-cpnuEd o-cpNAVm" viewBox="-5 -1 24 18" fill="currentcolor" tabIndex="-1" focusable="false" aria-hidden="true" role="img"><path d="M6.55 13.05a6.5 6.5 0 116.5-6.5 6.42 6.42 0 01-6.5 6.5zm0-12a5.5 5.5 0 000 11 5.43 5.43 0 005.5-5.5 5.51 5.51 0 00-5.5-5.5zm9.13 14.64a.54.54 0 000-.78l-4.14-4.14s-.19.22-.41.43-.37.35-.37.35l4.14 4.14a.56.56 0 00.78 0z"></path></svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
        </label>
        <div className="carbtns">
        <button id="cars" className='newCars' title="New Cars" onClick={newCars}>New Cars</button>
           <button id="123cars" className='newCars' title="Compare Cars" onClick={ListofCars}>Compare Cars</button>          
        </div>
      <div>
        {/* Render the dynamically selected component */}
        {searchResult && searchResult}
      </div>
      
    </div>
  );
};

export default React.memo(Search);
