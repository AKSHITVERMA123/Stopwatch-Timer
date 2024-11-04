import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import "./style/style.css";

const Password = () => {

    const focus = () => {
    document.getElementById("pwd123").focus();
    }
    
    const [password, setPassword] = useState(false);
    const [show, setShow] = useState("hide");
    const [hide, setHide] = useState("show");

    const handleClick = () => {
        setPassword(!password);
        setHide(hide);
    }

    const handleClickOff = () => {
        setShow(show);
    }

    const submit = () => {
        return "Submit";
    }

    return (
        <>
        <div id="Username" className="uname" onLoadedData={focus}>
              <div className="-ml-10 cursor-pointer">
              <input id="Uname" type="text" name='password' placeholder='Enter UserName'/>
          
            </div>
            </div>
        <div id="password" className="pwd" onLoadedData={focus}>
              <div className="-ml-10 cursor-pointer">
              <input id="pwd123" type={password ? "password" : "text"} name='password' placeholder='Enter Password'/>
                {
                    password ?  <EyeOff onClick={handleClick}/>:
                     <Eye onClick={handleClick}/>
                }
                {show ?   <show onClick={handleClick}/>:
                     <show onClick={handleClickOff}/>
                
            } Password
            </div>
            </div>
            <div className='together'>
            <div className="colors">
            Choose Browser
            <input className="browsers" type='text' name='browsers' list='Browsers'></input>
            <datalist id="Browsers">
                <option value="chrome">
                </option>   
                <option value="opera">
                </option>
                <option value="edge">
                </option>
                <option value="firefox">
                </option>
                <option value="safari">
                </option>
                <option value="Yahoo">
                </option>
            </datalist>
            </div>
            <div id="colors">
            Choose background Colors
            <input id="getcolor" type='color' list='getColors'></input>
            <datalist id="getColors">
                <option value="#ff0000">
                </option>
                <option value="#241dcc">
                </option>
                <option value="#ab912d">
                </option>
                <option value="#eff0aa">
                </option>
                <option value="#abccd5">
                </option>
                <option value="#1accda">
                </option>
            </datalist>
            </div>
            </div>

            <button onClick={submit}>Sumbit Data</button>
        </>
    );
};

export default Password;