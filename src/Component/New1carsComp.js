
import React from 'react';
import  { Link } from 'react-router-dom';
import NewCars1Comp from './NewCars1Comp';
const New1carsComp = () => {
    return (
        
        <div style={{float : "right"}}>
             <Link to='/NewCars1' className='btn btn-outline-success btn-sm'>New Cars</Link><br></br>
             {/* <NewCars1Comp/> */}
        </div>
    )
}

export default New1carsComp;
