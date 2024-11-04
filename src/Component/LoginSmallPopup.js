import React from 'react';
import RegisterComp from './RegisterComp';
// import '../assets/css/style.css'; // Import CSS file for styling

const LoginSmallPopup = ()  => {
    return (
        <div className="mainDiv" style={{display :"inline-flex"}}>
            {/* <div title="Location" class="o-brXWGL o-frwuxB o-fzptOu o-brXWGL"><div class="o-cKuOoN "><svg class="o-dlrcWp o-eoatGj o-cqgkZn o-euTeMg o-eVIFUq o-cUSgRL " viewBox="0 0 16 16" fill="currentcolor" tabindex="-1" focusable="false" aria-hidden="true" role="img"><path d="M8 16a1 1 0 01-.74-.33c-1-1.06-4-4.92-4.86-8.56-.5-2.64.31-4.86 2.22-6.11a6.4 6.4 0 016.85 0c1.87 1.26 2.64 3.48 2.12 6.08-.76 3.47-3.83 7.45-4.85 8.56A1 1 0 018 16zM3.37 6.89C4.18 10.32 7 14 8 15c1-1.07 3.92-4.84 4.63-8.1.45-2.21-.16-4-1.7-5a5.38 5.38 0 00-5.74 0C3.59 2.87 3 4.67 3.37 6.89zM8 8.49a2.84 2.84 0 01-2.87-2.8 2.87 2.87 0 015.74 0A2.84 2.84 0 018 8.49zm0-4.61a1.84 1.84 0 00-1.87 1.81 1.87 1.87 0 003.74 0A1.84 1.84 0 008 3.88z"></path></svg></div></div> */}
            <div className="container" style={{width: "550px"  , margin: "4em 0 0 0"}}>
            {/* <span role="button" aria-label="Close Popup" className="o-frwuxB o-brXWGL o-cjsCNH o-dAFptd o-cDoIpQ o-cpnuEd o-dsiSgT o-NBTwp o-fuiuOo o-eoatGj dbDC7A o-eNbQSA o-brXWGL o-fzoTtm o-fmSMPH  o-fznJFh o-fzptUA o-emXQxE o-fzptYC o-evuuYC "><svg className="o-dlrcWp o-eoatGj o-cqgkZn o-euTeMg o-bVnkiJ o-eurOBO o-cpNAVm" viewBox="0 0 16 16" fill="currentcolor" tabindex="-1" focusable="false" aria-hidden="true" role="img"><path d="M1.5 14.55a1 1 0 01-.71-.29 1 1 0 010-1.42L6.62 8 1.79 3.15a1 1 0 011.42-1.9L8 6.61L4.76-4.77a1 1 0 111.42 1.42L9.44 8l4.77 4.82a1 1 0 11-1.42 1.4L8 9.44l-4.79 4.82a1 1 0 01-.71.29z"></path></svg></span> */}
            <br></br>
            <h1>User Login</h1>
            <form >
                <div className="row">
                    <div className="label">
                        <label htmlFor="username">Username:</label>
                    </div>
                    <div className="input">
                        <input type="text" id="username" name="username" placeholder="Enter your username" />
                    </div>  
                </div>
                <div className="row">
                    <div className="label">
                        <label htmlFor="password">Password:</label>
                    </div>
                    <div className="input">
                        <input type="password" id="password" name="password" placeholder="Enter your password" />
                    </div>
                </div>
                <div className="row">
                    <div className="input">
                        <input type="submit" value="Login" />
                        <input type="reset" value="Reset" />
                    </div>
                </div>
            </form>
            <p>Not a User? <a href="Register" className='register'>Register here</a></p>
            <p><a href="ForgotPassword" className='forgot-password'>Forgot Password</a></p>
            </div>
        </div>
    );
}

export default LoginSmallPopup;