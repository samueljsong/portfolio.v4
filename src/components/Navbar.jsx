//Dependencies
import gsap from "gsap";

//Hooks
import { useEffect, useRef, useState } from "react";

//Styles
import "../index.css";
import "../styles/Navbar.css";

import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const Navbar = () => {
    useGSAP(() => {
        gsap.from(".container", {
            opacity: 0,
            top: "5%",
            duration: 1,
            ease: "power2.out",
        });
    });

    return (
        <>
            <div className="container">
                <div className="container-size">
                    <h2 className="name text3">SAMUELSONG</h2>
                </div>
                <div className="job-container">
                    <h3 className="job text3">SOFTWARE DEVELOPER</h3>
                </div>
                <div className="container-size nav">
                    <h3 className="text3">01 INTRO</h3>
                    <h3 className="text3">02 PROJECTS</h3>
                    <h3 className="text3">03 CONTACT</h3>
                </div>
            </div>
        </>
    );
};
