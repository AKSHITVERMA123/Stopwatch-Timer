import React, { useState } from 'react';
import "../Components/styleCSS/style.css";
import MyResume from './Resume/AkshitCV.pdf';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "react-bootstrap/esm/Card.js";
import "react-bootstrap/esm/CardBody.js";
import "react-bootstrap/esm/CardHeader.js";
import "react-bootstrap/esm/CardFooter.js";
import "react-bootstrap/esm/CardImg.js";
import "react-bootstrap/esm/CardSubtitle.js";
import "react-bootstrap/esm/CardText.js";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import img from "../Components/images/TATATiago.jpg";
import Img from "../Components/images/python.png";
const Portfoilo = () => {

    const [role] = useState('Frontend');
    document.title = "My Portfolio";
    const values = () => {

        let courses = document.getElementsByClassName("courses");
        let c = courses.item(0);
        if (c === "C++") {
            return (document.getElementById("cpp").value);
        }
    }

    const cardEffect = () => {
        document.getElementById("card").className = "border border-success border-2";
    }

    const cardBack = () => {
        document.getElementById("card").className = "border border-primary border-2";
    }

    const differentRole = () => {
        var even = -1000;
        let odd = 0;

        setInterval(() => {
            let span = document.getElementById("role");
            let role = "Python";
            span.innerHTML = `${role}`;
        }, even + 40000);

        setInterval(() => {
            let span = document.getElementById("role");
            let role = "Backend";
            span.innerHTML = `${role}`;
        }, odd + 20000);
    }

    let even = -2000;
    setInterval(() => {

    }, even + 30000);

    let i = 0;
    setTimeout(() => {

        let span = document.getElementById("role");
        for (let i = 0; i < role.length; i++) {
            span.innerHTML += role.charAt(i);
        }
        i = i + 1;
    }, 100);

    const toggleColor = () => {
        let button = document.getElementsByName("toggleColor");
        if (button.item(0).className === "bg-dark py-0 px-1 darklightmode") {
            document.getElementById("backgroundClr").style.cssText = "background: #333";
            document.querySelectorAll("span").forEach((i) => {
                i.style.cssText = "color: #fff";
            })
            button.item(0).className = "bg-light py-0 px-1 darklightmode";
            document.getElementById("path").setAttribute("fill", "#000");
            document.getElementById("path").setAttribute("d", "M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z");
        }
        else {
            document.getElementById("backgroundClr").style.cssText = "background: rgb(218, 216, 216)";
            document.querySelectorAll("span").forEach((i) => {
                i.style.cssText = "color: #333";
            })
            button.item(0).className = "bg-dark py-0 px-1 darklightmode";
            document.getElementById("path").setAttribute("fill", "#fff");
            document.getElementById("path").setAttribute("d", "M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z");

        }
    }

    let fcount = -2000;
    setInterval(() => {
        let span = document.getElementById("role");
        let role = "Web";
        span.innerHTML = `${role}`;
    }, fcount + 50000);

    return (
        <div className="main" id="backgroundClr">
            <nav id="nav" className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">My Portfolio.com</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="d-flex flex-column align-items-center">
                            <div className="d-flex float-end column-gap-5 justify-content-end">
                                <button className="bg-dark py-0 px-1 darklightmode" name="toggleColor" type="button" title="Switch between dark and light mode (currently light mode)" aria-label="Switch between dark and light mode (currently light mode)" onClick={toggleColor}><svg viewBox="-1 2 24 24" width="24" height="24" className="lightToggleIcon_lgto"><path id="path" fill="#fff" d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"></path></svg></button>                            </div>
                        </div>
                        <form className="d-flex border border-0 px-0" role="search">
                            <input className="form-control my-3 py-3 mx-2 px-0 Search" type="search" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div>
                <br></br>
                <span id="portfolio" className='fs-1 d-block'>
                    Hello ,Welcome to my Portfolio
                </span>
                <span className='iam'>
                    I am<span className='text-primary text-center fs-1 fw-bold' style={{ animationDelay: "1s", animationName: "moveName", animationTimingFunction: "linear", animationDuration: "2s", animationDirection: "normal", position: "relative" }}>Akshit Verma</span></span>
                <br></br><span className='fs-2 post'> I am a <span id="role" className='fs-2 text-center text-success fw-bold' onClick={differentRole()}></span>
                    <span className="fs-2"> Developer</span></span>
                <br></br>
                <span className='float-start'>
                    I am proficient in Core Java.
                    I’ve worked on more than two my own projects using html - css - javascript - bootstrap - react.js ,writing clean code and maintain high performance of my apps , I always stay up-to-date, Always do my best for the benefit of the team ,Learning modern technologies such as AngularJs, NodeJs</span>
                <span className="fs-3 d-block my-2 resume">Download My Resume</span>
                <a href={MyResume} id="resumeClick" className='my-5 rounded-2' download>Download CV</a>
                <span className="fw-bold fs-2 d-block my-2">My Skills</span>
            </div >
            <div className="detail text-dark">
                <div className="skills d-flex">
                    <span className="fs-4 px-5 courses">C++
                    </span>
                    <input id="cpp" type='range' className='mt-2 w-25' value={"75"} readOnly></input>
                </div>
                <span className='float-start mx-5 percentage' onChange={values()} defaultValue={values()}>75%</span>
                <br></br>
                <div className="skills d-flex">
                    <span className="fs-4 px-5 courses">
                        Java
                    </span>
                    <input id="java" type='range' className='mt-2 w-25' value={"60"} readOnly></input>
                </div>
                <span className='float-start mx-5 percentage' onChange={values} defaultValue={60}>60%</span>
                <br></br>
                <div className="skill d-flex">
                    <span id="courses" className="fs-4 px-5">HTML
                    </span>
                    <input id="cpp" type='range' className='mt-2 w-25' value={"90"} readOnly></input>
                </div>
                <span className='float-start mx-5 percentage' onChange={values()} innerHTML={"90"}>90%</span>
                <br></br>
                <div className="skills d-flex">
                    <span id="courses" className="fs-4 px-5">CSS&nbsp;
                    </span>
                    <input id="cpp" type='range' className='mt-2 w-25' value={"90"} readOnly></input>
                </div>
                <span className='float-start mx-5 percentage' onClick={values()} value={"90"}>90%</span>
                <br></br>
                <div className="skills d-flex column-gap-3">
                    <span id="courses" className="fs-4 px-5">Bootstrap
                    </span>
                    <input id="cpp" type='range' className='mt-2 w-25' value={"75"} readOnly></input>
                </div>
                <span className='float-start mx-5 percentage' onChange={values()} defaultValue={75}>75%</span>
                <br></br>
                <div className="skills d-flex column-gap-3">
                    <span id="courses" className="fs-4 px-5">Javascript
                    </span>
                    <input id="cpp" type='range' className='mt-2 w-25' value={"80"} readOnly></input>
                </div>
                <span className='float-start mx-5 percentage' onChange={values()} defaultValue={80}>80%</span>
                <br></br>
                <div className="skill d-flex">
                    <span id="courses" className="fs-4 px-5">React&nbsp;
                    </span>
                    <input id="cpp" type='range' className='mt-2 w-25' value={"75"} readOnly></input>
                </div>
                <span className='float-start mx-5 percentage' onChange={values()} defaultValue={75}>75%</span>
                <br></br>
            </div>
            <div className="myProjects">
                <span className="fw-bold fs-2 pt-3 d-block">My Projects</span>
                <span className='float-start pt-2 px-5 fw-bold'>Here are Some of my Key Projects</span>
                <br></br><br></br>
                <div className="card-container d-flex justify-content-evenly">
                    <Card style={{ width: "360px", height: "550px", border: "2px solid #000" }} className='p-1 mt-3 mx-5'>
                        <Card.Img src={Img} id="card" className='border border-primary border-2 border-radius-50' onMouseOver={cardEffect} onMouseOut={cardBack} style={{ boxSizing: "content-box" }}>
                        </Card.Img>
                        <Card.Body className='p-2'>
                            <Card.Title>
                                About this project
                            </Card.Title>
                            <Card.Text>
                                This is a python project to find the best house price by applying different ML algorithms and choose the best one.
                            </Card.Text>
                            <Link to="/PythonProject" target='_blank' id='fullPreview' className='btn'>Full Preview</Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: "360px", height: "550px", border: "2px solid #000" }} className='p-1 mt-3 mx-5'>
                        <Card.Img src={img} id="card" className='border border-primary border-2 border-radius-50 cursor-pointer' onMouseOver={cardEffect} onMouseOut={cardBack}>
                        </Card.Img>
                        <Card.Body className='p-2'>
                            <Card.Title>
                                About this project
                            </Card.Title>
                            <Card.Text>
                                This is a car project. This project is made with the use of HTML5, CSS3, Javascript, React and Java as a Backend with MySQL Database.
                            </Card.Text>
                            <Link to="/CarProject" target='_blank' id='fullPreview' className='btn'>Full Preview</Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="d-flex flex-column mt-4 border border-2 border-dark bg-dark w-100 h-50">
                    <article className='text-light'>Important Links</article>
                    <a href="/help" className="text-decoration-none">Help </a>
                    <a href="/wp" className="text-decoration-none">Website Policies </a>
                    <a href='/cp' className="text-decoration-none">Copyright Policy </a>
                    <a href="/tc" className="text-decoration-none">Terms & Conditions </a>
                    <a href="/reachus" className="text-decoration-none">Reach Us </a>
                    <label className='font-bold d-flex justify-content-center'>Website owned & maintained by: Akshit Verma</label>
                    <article className='text-light font-bold'>Copyright © 2024 Akshit Verma. All rights reserved, Last Updated: Friday, Oct 25, 2024</article>
                </div>
            </div>
        </div >
    )
}

export default Portfoilo;