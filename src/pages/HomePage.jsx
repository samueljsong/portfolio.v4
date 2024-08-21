//Dependencies
import gsap from "gsap";

//Hooks
import { useEffect, useRef, useState } from "react";

//Components
import { Navbar } from "../components/Navbar";
import { Contact } from "../components/Contact";
import { Copyright } from "../components/Copyright";
import { Separation } from "../components/Separation";
import { Project } from "../components/Project";
import { About } from "../components/About";

//Styles
import "../index.css";
import "../styles/HomePage.css";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
// import ReactLenis from "libs/lenis";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const HomePage = () => {
    const lenisRef = useRef(null);

    useEffect(() => {
        // Initialize Lenis
        lenisRef.current = new Lenis({
            duration: 1.2, // scrolling duration
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // custom easing function
            smooth: true, // enable/disable smooth scrolling
            wheelMultiplier: 0.5,
        });

        // Update loop
        const lenis = lenisRef.current;
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    useGSAP(() => {
        const t1 = gsap.timeline();

        t1.from(".software", {
            right: "-15%",
            opacity: 0,
            duration: 2,
            ease: "power2.out",
            delay: 0.5,
        });

        t1.to(".software", {
            x: () => -200,
            ease: "none",
            scrollTrigger: {
                trigger: ".landingHome",
                start: "top top",
                end: "+=1000px",
                scrub: true,
                pin: false,
            },
        });
    });

    useGSAP(() => {
        const t1 = gsap.timeline();

        t1.to(".developer", {
            left: "-35%",
            opacity: 1,
            duration: 2,
            ease: "power2.out",
            delay: 0.75,
        });

        t1.to(".developer", {
            x: () => +200,
            ease: "none",
            scrollTrigger: {
                trigger: ".landingHome",
                start: "top top",
                end: "+=1000px",
                scrub: true,
                pin: false,
            },
        });
    });

    return (
        <>
            <Navbar></Navbar>
            <div className="main-container">
                <section className="landingHome">
                    <div className="landingHome-info">
                        <h1 className="heading4 software">SOFTWARE</h1>
                        <h1 className="heading4 developer">DEVELOPER</h1>
                    </div>
                </section>
                <Separation num={"01"} text={"WHO AM I?"} side={"right"} />
                <About></About>
                <Separation num={"02"} text={"MY WORK"} side={"left"} />
                <Project></Project>
                <Separation num={"03"} text={"GET IN TOUCH?"} side={"right"} />
                <Contact></Contact>
                <Copyright />
            </div>
        </>
    );
};