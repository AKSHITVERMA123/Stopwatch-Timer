import React from 'react';
import LoginSmallPopup from './LoginSmallPopup';
import '../components/style.css';
import { Form } from 'react-router-dom';
class RegisterComp extends React.Component {
    render() {
        function captcha() {
        
            const length=5;
            let captcha="";
            for(let i=0;i<=length;i++){
                captcha+=Math.floor(Math.random()*10);
                document.getElementById("CAPTCHA").innerHTML=captcha;
            }
        }
        // setInterval(() => {
            setTimeout(() => {
                captcha();
            }, Window.onClick);
        // }, 1000);
       function f(){
        document.getElementById("registrationForm").addEventListener('submit', async function(event) {
            event.preventDefault();
            const formData = new FormData(this);
            const userData = Object.fromEntries(formData);
    
            try {
                const response = await axios.post('http://localhost:3000/Register', userData);
                console.log(response.data);
                alert('User registered successfully');
            } catch (error) {
                console.error(error);
                alert('Error registering user');
            }
        });
    }
        return (
            <div className="mainDiv" style={{display :"inline-flex"}}>
            <div className="container" style={{width: "550px"  , margin: "4em 0 0 0"}}>
                <h1>Register Page</h1>
                <form onSubmit={this.f} id="registrationForm">
                    <div className="row">
                        <div className="label">
                            <label htmlFor="username">Username:</label>
                        </div>
                        <div className="input">
                            <input type="text" id="username" name="username" placeholder="Enter your username" required />
                        </div>
                    </div>

                    <div className="row">
                        <div className="label">
                            <label htmlFor="email">Email:</label>
                        </div>
                        <div className="input">
                            <input type="email" id="email" name="email" placeholder="Enter your email" required />
                        </div>
                    </div>

                    <div className="row">
                        <div className="label">
                            <label htmlFor="password">Password:</label>
                        </div>
                        <div className="input">
                            <input type="password" id="password" name="password" placeholder="Enter your password" required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="label">
                            <label htmlFor="confirm-password">Confirm Password:</label>
                        </div>
                        <div className="input">
                            <input type="password" id="confirm-password" name="confirm-password" placeholder="Repeat your password" required />
                        </div>
                    </div>
                     <div className="row">
                        <div className="label">
                        <label>Enter Captcha</label>&nbsp;&nbsp;&nbsp;
                            <input id="getCaptcha" type="number" style={{marginLeft: "20px"}}></input><br></br><br></br>
                        </div>
                        <div className="input">
                            <label style={{display :"inline-flex" }}> <span style={{marginTop : "10px"}}>Captacha : </span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <b id ="CAPTCHA" className='Captcha' style={{marginLeft: "40px",width:"70px" , height :"30px" ,marginTop :"8px"}}>289356</b><img src='https://cdn-icons-png.flaticon.com/128/2310/2310787.png' style={{height: "50px", width: "50px"}} id='CAPTCHA' onClick={captcha}></img>    
                             </label>
                             
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="input">
                            <input type="submit" onClick={LoginSmallPopup} value="Register" />
                        </div>
                    </div>
                </form>
                <p>Already are a user? <a href='Login'>Login here</a></p>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
            </div>
        );
    }
    
        // Handle form submission here
}

export default RegisterComp;