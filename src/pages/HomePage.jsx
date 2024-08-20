//Dependencies
import gsap from "gsap";

//Hooks
import { useEffect, useRef, useState } from "react";

//Components
import { Navbar } from "../components/Navbar";

//Styles
import "../index.css";
import "../styles/HomePage.css";

import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const HomePage = () => {
    useGSAP(() => {
        gsap.to(".software", {
            right: "-20%",
            opacity: 1,
            duration: 2,
            ease: "power2.out",
            delay: 0.5,
        });
    });

    useGSAP(() => {
        gsap.to(".developer", {
            left: "-35%",
            opacity: 1,
            duration: 2,
            ease: "power2.out",
            delay: 1,
        });
    });

    return (
        <>
            <Navbar></Navbar>
            <div className="main-container">
                <section className="landing">
                    <div className="landing-info">
                        {/* <h3 className="text text-md">
                        👋🏻, My name is Samuel and I'm a
                    </h3> */}
                        <h1 className="heading4 software">SOFTWARE</h1>
                        <h1 className="heading4 developer">DEVELOPER</h1>
                        {/* <h3 className="text location text-md">
                        📍based in Surrey BC
                    </h3> */}
                    </div>
                </section>
                <section className="about"></section>
            </div>
        </>
    );
};
