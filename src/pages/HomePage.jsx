//Dependencies
import gsap from "gsap";

//Hooks
import { useEffect, useRef, useState } from "react";

//Components
import { Navbar } from "../components/Navbar";
import { Contact } from "../components/Contact";
import { Copyright } from "../components/Copyright";

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
                trigger: ".landing",
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
                trigger: ".landing",
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
                <section className="landing">
                    <div className="landing-info">
                        <h1 className="heading4 software">SOFTWARE</h1>
                        <h1 className="heading4 developer">DEVELOPER</h1>
                    </div>
                </section>
                <span className="separation"></span>
                <section className="about">
                    <div className="about-container">
                        <div>
                            <h2 className="heading2 about-text">
                                Hey I'm{" "}
                                <span className="about-name">Samuel</span> a
                                software
                            </h2>
                            <h2 className="heading2 about-text">
                                developer currently looking
                            </h2>
                            <h2 className="heading2 about-text">
                                for new opportunities
                            </h2>
                            <h2 className="heading2 about-text">
                                to expand my skillset.
                            </h2>
                        </div>
                    </div>
                </section>
                <span></span>
                <section className="project">
                    <h1>projects</h1>
                </section>
                <Contact></Contact>
                <Copyright />
            </div>
        </>
    );
};
