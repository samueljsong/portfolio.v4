//Dependencies
import gsap from "gsap";

//Hooks
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

//Styles
import "../styles/LandingPage.css";
import "../index.css";

//Images
import down from "../assets/img/down.svg";

//Functions
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const LandingPage = () => {
    const title = useRef(null);
    const infoRef = useRef(null);
    const copyrightRef = useRef(null);
    const page = useRef(null);

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
        gsap.from(".down-container", {
            opacity: 0,
            ease: "power3.inOut",
            duration: 1,
            delay: 1.55,
            onComplete: () => {
                gsap.to(".down-container", {
                    y: "-=20",
                    ease: "power3.out",
                    duration: 0.5,
                    repeat: -1,
                    yoyo: true,
                    delay: 0.25,
                });
            },
        });
    });

    return (
        <>
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
                    <div className="down-parent">
                        <div className="down-container">
                            <p className="down-text text">Scroll Down</p>
                            <img className="down-image" src={down} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
