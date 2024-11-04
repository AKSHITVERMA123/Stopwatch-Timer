import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const LoginSuccess = () => {
        return "/";
    }

    return (
        <div className='form-control'>
            <h4>Login Form</h4>
            User have Registered Succesfully.
            <form>
                
                <label htmlFor="name"> Enter the Username</label>
                <input type='text' id="Name"></input>
                <label htmlFor="email"> Enter the EmailID</label>
                <input type='text' id="Email"></input>
                <label htmlFor="password"> Enter the Password</label>
                <input type='text' id="Pwd"></input>
                <label htmlFor="confPwd"> Confirm Password</label>
                <input type='text' id="ConfPwd"></input>
                <Link to={LoginSuccess()}>Click to Login</Link>
            </form>
        </div>
    )
}

export default Login;