//Dependencies
import gsap from "gsap";

//Hooks
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

//Styles
import "../styles/LandingPage.css";
import "../index.css";

//Image
import linkedIn from "../assets/img/linkedin.svg";
import github from "../assets/img/git.svg";

//Components
import {
    PageTransition,
    pageTransitionHandler,
} from "../components/PageTransition";

//Functions
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const LandingPage = () => {
    const title = useRef(null);
    const infoRef = useRef(null);
    const buttonRef = useRef(null);
    const copyrightRef = useRef(null);
    const page = useRef(null);

    const navigate = useNavigate();

    useGSAP(
        () => {
            gsap.from(".char", {
                y: 600,
                ease: "power3.inOut",
                stagger: 0.075,
                delay: 0.2,
                duration: 1.5,
            });
        },
        { scope: title }
    );

    useGSAP(
        () => {
            gsap.from(".char", {
                y: 30,
                ease: "power3.inOut",
                duration: 1,
                delay: 1.55,
            });
        },
        { scope: infoRef }
    );

    useGSAP(() => {
        gsap.from(buttonRef.current, {
            y: 30,
            opacity: 0,
            ease: "power3.inOut",
            duration: 1,
            pointerEvents: "none",
            delay: 1.55,
        });

        gsap.from(copyrightRef.current, {
            opacity: 0,
            ease: "power3.inOut",
            duration: 1,
            delay: 1.55,
        });
    });

    const handleMouseEnter = () => {
        gsap.to(buttonRef.current, {
            y: -10,
            duration: 0.1,
            color: "var(--highlight)",
            borderColor: "var(--highlight)",
        });
    };

    const handleMouseExit = () => {
        gsap.to(buttonRef.current, {
            y: 0,
            duration: 0.1,
            color: "var(--primary)",
            borderColor: "var(--primary)",
        });
    };

    const handleClick = async () => {
        await gsap.to(buttonRef.current, {
            scale: 0.9,
            duration: 0.1,
        });

        await gsap.to(buttonRef.current, {
            scale: 1,
            duration: 0.1,
        });

        await pageTransitionHandler();

        navigate("/home");
    };

    return (
        <>
            <PageTransition />
            <section ref={page} className="landing">
                <div className="landing-container">
                    <div ref={infoRef} className="info-text-container text">
                        <span className="char">p</span>
                        <span className="char">o</span>
                        <span className="char">r</span>
                        <span className="char">t</span>
                        <span className="char">f</span>
                        <span className="char">o</span>
                        <span className="char">l</span>
                        <span className="char">i</span>
                        <span className="char">o</span>
                    </div>
                    <h1 ref={title} className="landing-title heading">
                        <span className="char">S</span>
                        <span className="char">A</span>
                        <span className="char">M</span>
                        <span className="char">U</span>
                        <span className="char">E</span>
                        <span className="char">L</span>
                    </h1>
                    <button
                        className="btn landing-btn text"
                        ref={buttonRef}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseExit}
                        onClick={handleClick}
                    >
                        Enter
                    </button>
                </div>
                <div className="copyright" ref={copyrightRef}>
                    <p className="fs-500">@2024 Samuel Song</p>
                    <a
                        href="https://www.linkedin.com/in/samuel-song-490743234/"
                        target="_blank"
                    >
                        <img src={linkedIn} alt="" className="contact-icon" />
                    </a>
                    <a href="https://github.com/samueljsong" target="_blank">
                        <img src={github} alt="" className="contact-icon" />
                    </a>
                </div>
            </section>
        </>
    );
};
