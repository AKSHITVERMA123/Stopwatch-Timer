
import React from 'react';
import { Link } from 'react-router-dom';
const NavComp = () => {
    return (
        <div>
        <h2>This is NavComp Component</h2>  
        <Link to="/carausel" className='btn btn-outline-primary btn-sm'>Multimedia</Link> 
        <Link to="/multimedia" className='btn btn-outline-primary btn-sm'>Multimedia</Link>     
        <Link to="/list" className='btn btn=outline-primary btn-sm'>Form</Link>     
        <Link to="/FavColorCom" className='btn btn=outline-primary btn-sm'>Favourite</Link>     
        <Link to="/Classcomp" className='btn btn=outline-primary btn-sm'>Class</Link>     
        <Link to="/Dashboard" className='btn btn-outline-primary btn-sm'>CRUD</Link>{" "} 
        </div>
    )
}

export default NavComp;