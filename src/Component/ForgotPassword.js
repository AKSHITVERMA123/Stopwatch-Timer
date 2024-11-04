
import React from 'react';
import Search from '../components/Search';
import '../components/style.css';
const ForgotPassword = () => {

    function update() {
        let newpwd=document.getElementById("Newpassword").value;
        document.getElementById("Oldpassword").innerHTML=newpwd;
        document.write("Your Password is updated Successfully",newpwd);
    }
    return (
            <div className='container' style={{width : "25em"}}>
                <h1>Forgot Password Page</h1>
                <form className='c1'>
                <div className="row">
                    <div className="label">
                    <label htmlFor='Oldpassword'>Enter Old Password</label>
                    </div>
                <div className='input'>
                <input type="text" id="Oldpassword" name="Oldpassword" placeholder="Enter your Old Password" />
                </div>
                </div>
                <div className="row">
                    <div className="label">
                    <label htmlFor='Newpassword'>Enter New Password</label>
                    </div>
                <div className='input'>
                <input type="text" id="Newpassword" name="Newpassword" placeholder="Enter your New Password" />
                </div>
                </div>
                <div className="row">
                        <div className="button">
                            <button type="submit" value="Update" onClick={update}>Update</button>
                        </div>
                    </div>
                </form>
            </div>
    )
}

export default ForgotPassword;
