import React from 'react';
import { Link } from 'react-router-dom';
import "../Components/style/style.css";
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
// import "../Bootstrap/bootstrap.min.css";

const UserRegistration = () => {

    const UserRegistration = () => {
        return "/Registration";
    }
    return (
        <div className='form'>
            <form>
                <h4>Registration Form</h4>
                <div className="container">
                <label htmlFor="name"> Enter Username</label>
                <input type='text' id="Name"></input>
                </div>
                <div className="container">
                <label htmlFor="email"> Enter EmailID</label>
                <input type='text' id="Email"></input>
                </div>
                <div className="container">
                <label htmlFor="password"> Enter Password</label>
                <input type='text' id="Pwd"></input>
                </div>
                <div className="container">
                <label htmlFor="confPwd"> Confirm Password</label>
                <input type='text' id="ConfPwd"></input>
                </div>
                <Link to={UserRegistration()}>Click to Register</Link>
            </form>
        </div>
    )
}

export default UserRegistration;