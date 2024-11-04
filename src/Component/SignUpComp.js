
import React from 'react';
// import {useNavigate} from 'react-router-dom';
import './style.css';
// import CarCaraouselComp from './CarCaraouselComp';
// import MarutiSuzukiCar from '../assets/images/MarutiSuzukiCar.jpg';
const SignUpComp = () => {
    
    function showCars(){
        // document.write("<img src='../assets/images/MarutiSuzukiCar.jpg' id='ComparethisImage'></img>");
    }   
   // const Navigate = useNavigate();
    function signup() {
        let values=document.getElementById("getCaptcha").value;
        if(values===document.getElementById("CAPTCHA").innerText){
            document.write("You have Signed Up sucessfully <br><br>");
            let x=1;
            alert("<img src={MarutiSuzukiCar}></img>");
            document.write("Welcome to you User");
            document.write("<h2>Add Cars </h2>");
            document.write("<img src=x></img>");
            // showCars();
            <button onclick='CarDescription'>Compare</button>
            // let img=document.createElement('img');
              
          //  img.src={MarutiSuzukiCar};
            // img.style.borderRadius="20px";
            // img.style.border="2px solid black";
            
    
        }
        else
        {
             document.write("Error ! Invalid Captcha");
        }  
    }

    function captcha() {
        
        const length=5;
        let captcha="";
        for(let i=0;i<=length;i++){
        captcha+=Math.floor(Math.random()*10);
        document.getElementById("CAPTCHA").innerHTML=captcha;
        }
    }

    function Default() {
        let VAR="";
        VAR=Math.floor(Math.random()*10);
      //  document.getElementById("defaultcaptcha").innerHTML=VAR;
}
  
    return (
        <div>
        <form action="signup.html" method="get">
        <label>Enter Username</label>&nbsp;&nbsp;&nbsp;
        <input type="text"  style={{marginLeft: "6px"}}></input><br></br><br></br>
        <label>Enter Password</label>&nbsp;&nbsp;&nbsp;
        <input type="password" style={{marginLeft: "11px"}}></input><br></br><br></br>
        <label>Enter Captcha</label>&nbsp;&nbsp;&nbsp;
        <input id="getCaptcha" type="number" style={{marginLeft: "20px"}}></input><br></br><br></br>
        <label> Captacha : &nbsp;&nbsp;&nbsp;&nbsp;
        <b id ="CAPTCHA" className='Captcha' onClick={captcha} style={{marginLeft: "40px",width:"400px"}}>289356</b>
            </label><br></br>
        <br></br><form action='/CarImage' method='get' target='_blank'><br></br><button className="Signup" type="submit" name="SignUp" style={{marginLeft : "120px" , display:"flex", justifyContent: "center", borderRadius: "20%"}}>SignUp</button>
        </form></form>
    {/* signup(); */}
    </div>
    )
}

export default SignUpComp;
