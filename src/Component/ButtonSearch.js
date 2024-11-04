import React from 'react';
import { useState } from 'react';
import style from '../assets/css/style.css';
import {Link} from 'react-router-dom';
import image from '../shared/constant/constantData';
const ButtonSearch = () => {
  //   function newCars(){
  //       document.write("<div style={{float : 'right'}}><Link to='/NewCars1' className='btn btn-outline-success btn-sm'>New Cars</Link><br></br></div>");
  //       // document.write();
  //  <NewCars1Comp/>
  function newCars() {
    document.write(<img src={image} title='Hyundai Car' alt='Hyundai Car' style={{height:"150px" , width:"150px"}}></img>)
    };
   
    return (
        <div className="search-container" style={{display :"inline-flex"}}>
      
        
        <form onSubmit={handleSubmit} >
         <button id='Search' style={{height:"45px"}} type='submit' value={query} onChange={handleInputChange} classname="o-bXKmQE o-cWRslo o-eZTujG o-bkmzIL o-dqrENu o-duzCJV o-bWgajq" onClick={newCars}><svg class="o-dlrcWp o-eoatGj o-cqgkZn o-euTeMg o-bfWOPh o-bJvRsk o-fznJFh o-cpnuEd o-cpNAVm" viewBox="0 -1 16 16" fill="currentcolor" tabindex="-1" focusable="false" aria-hidden="true" role="img"><path d="M6.55 13.05a6.5 6.5 0 116.5-6.5 6.42 6.42 0 01-6.5 6.5zm0-12a5.5 5.5 0 000 11 5.43 5.43 0 005.5-5.5 5.51 5.51 0 00-5.5-5.5zm9.13 14.64a.54.54 0 000-.78l-4.14-4.14s-.19.22-.41.43-.37.35-.37.35l4.14 4.14a.56.56 0 00.78 0z"></path></svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
         </form>
        {/* <i class='bx bx-search' ></i> */}
        </div>
    );
}

export default ButtonSearch;
