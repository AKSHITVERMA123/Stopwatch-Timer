import React from 'react';
import ProductListing from "./ProductListing";
import google from "../Images/google.jpg";
import "./style/style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
const CostCalculate = () => {
    // let x = false;
    // let promise = new Promise((resolve, reject) => {
    //     if (x) {
    //         console.log("promise is fullfuilled");
    //         resolve(1);
    //         // console.log(promise);
    //         resolve("Promise is successfully resolved");
    //     }
    //     else {
    //         console.log("Error has occured");
    //         //  console.log(promise);
    //         reject(-1);
    //         reject("The error occurs");
    //     }

    // })
    // console.log(promise);
    // const [dark, setDark] = useState(0);
    // const handleSubmit = () => {

    //     setDark(!dark)
    // }

    // const UserRegistration = () => {
    // return "/UserRegistration";
    // }


    // const submitFile = () => {
    //     let form = document.getElementById("uploadPDFForm");
    //     form.addEventListener('submit',(e) => {
    //         // e.preventDefault();
    //     // const formData= new FormData();
    //     const fileInput= document.getElementById("pdfUpload");
    //     document.getElementById("Upload").setAttribute("download",fileInput);
    //     if(fileInput.length===0){
    //         alert("Please select a PDF file to upload");
    //         return;
    //     }
    // formData.append('pdf',fileInput[0]);
    //     axios.post("/http://localhost:4040/",formData, {
    //         headers: {
    //             'Content-Type' : 'multipart/form-data',
    //         }
    //     })
    //     .then((response) => {
    //         alert("PDF file Uploaded Successfully");
    //     })
    //     .catch(error => {
    //         alert("Error Uploading PDF");
    //         console.log(error);
    //     });
    // });
    // })
    // }

    // let index = 0;
    // const forloop = () => {
    //     let span = document.getElementById("role");
    //     if (index < role.length) {
    //         // span.style.length=1;
    //         // span.length=1;
    //         span.innerHTML += role[index];
    //         index++;
    //     } else {
    //         //   clearInterval(interval); // Stop when all characters are printed
    //     }
    // }

    // Upload Your PDF file Here
    //        <form id="uploadPDFForm" encType='multipart/form-data'>
    //        <input type='file' id="pdfUpload" accept="application/pdf"></input>
    //        <a href="/upload" id="Upload" type="submit" onClick={submitFile}>UploadPDF</a>
    //        </form>
    //     </div>
    //     <div className='Links'>
    //     <Link to={UserRegistration()} className='mr-100'>Click to Register</Link>
    //     <Link to="/CostCalculator" className='mr-100'>Go to Cost Calculator</Link>
    //             </div> 

    // ML, NeuralNet, Python , NLP

    document.body.style.background = "#311919";
    const makechai = () => {
        const chaiReady = true;
        let button = document.getElementById("makechai");
        if (button) {
            button.style.cssText = "background: #fa5408";
            const message = chaiReady ? "Start Coding" : "Make chai First";
            let para = document.getElementById("para");
            para.innerHTML = message;
            para.style.color = "#fa5408";
            document.getElementsByTagName("b").item(0).style.background = "#519255";
        }
    }

    const selector = () => {
        // let States = null;
        let ECommerce = ["Product Listing", "Payment Integration"];
        let SocialMedia = ["User Profiles", "Chat System"];
        let CloudKitchen = ["Menu Display", "Online Ordering"];
        let NotAvailable = ["Not Available"];
        let state1 = document.getElementById("category1");
        let state2 = document.getElementById("category2");
        // States.forEach(function addStates(Name){
        // let option=document.createElement("option");
        // option.value=Name;
        // option.text=Name;
        // state1.appendChild(option);
        // });
        state1.onchange = function () {
            state2.innerHTML = "";
            if (this.value === "E-Commerce") {
                addTostate2(ECommerce);
            }
            else if (this.value === "Social Media") {
                addTostate2(SocialMedia);
            }
            else if (this.value === "Cloud Kitchen") {
                addTostate2(CloudKitchen);
            }
            else {
                addTostate2(NotAvailable);
            }
        }
        function addTostate2(arr) {
            arr.forEach(function (Name) {
                let option = document.createElement("option");
                option.text = Name;
                option.value = Name;
                if (state1.value !== "Select One....") {
                    state2.setAttribute("multiple", true);
                    state2.setAttribute("size", 2);
                }
                else {
                    state2.setAttribute("multiple", false);
                    state2.setAttribute("size", 1);
                }
                state2.appendChild(option);
            });
        }
    }

    const method = (id) => {
        return console.log(document.getElementById(id).value);
    };

    return (
        <div style={{ marginTop: "12em" }} className='container mb-3'>
            <h2 className='AppCostCalculator'>Welcome to My App Cost Calculator</h2>
            <select id="category1" onClick={selector}>
                <option>Select One....</option>
                <option>E-Commerce</option>
                <option>Social Media</option>
                <option>Cloud Kitchen</option>

            </select>
            <select id="category2">
                <option>Not Available</option>
            </select>
            <div className="checkbox">
                <input type='checkbox' id="i1" className='check' onCanPlay={ProductListing} value={"1"} onClick={method}></input>
                <input type='checkbox' id="i2" className='check' onCanPlay={ProductListing} value={"2"} onClick={method}></input>
                <input type='checkbox' id="i3" className='check' onCanPlay={ProductListing} value={"3"} onClick={method}></input>
            </div>
            <button type='submit' id="makechai" onClick={makechai} className='btnChai'>Click to Make Chai</button>
            <b dataContent="abcdef"><p id="para"></p>abcdef</b>
            <details className='text-light'>
                <summary>
                    click to expand the programming languages
                </summary>
                <p >React</p>
                <p >C</p>
                <p >C++</p>
                <p >Java</p>
                <p >HTML</p>
                <p >CSS</p>
                <p >Javascript</p>
                <p >REact Native</p>
            </details>
            <div className="d-flex flex-row mt-5 links justify-content-evenly" id="links">
                <a href="https://www.linkedin.com/in/akshit-verma-26470727a/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 570" id="linkedin" className='cursor-pointer'><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg></a>
                <a href="https://instagram.com/akshitverma200"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 590" id="instagram" className='cursor-pointer'><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg></a>
                <a href="https://www.google.com" className='gle'><img src={google} alt="google" id="google"></img></a>
                <a href="https://www.tiktok.in"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 610" id="tiktok" className='cursor-pointer'><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" /></svg></a>
                <a href="https://www.twitter.com"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 610" id="twitter" className='cursor-pointer'><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg></a>
                <a href="https://www.facebook.com"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 590" id="facebook" className='cursor-pointer'><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg></a>
            </div>
        </div>
    )
}

export default CostCalculate;
