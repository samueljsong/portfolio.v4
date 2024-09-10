//Dependencies
import gsap from "gsap";

//Hooks
import { useEffect, useRef, useState } from "react";

//Styles
import "../index.css";
import "../styles/Contact.css";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//Image
import linkedIn from "../assets/img/linkedin.svg";
import github from "../assets/img/git.svg";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 575.98);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setIsMobile(window.innerWidth < 575.98);
        });
    });

    const buttonRef = useRef(null);

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

        window.location.href = "mailto:semuall0108@gmail.com";
    };

    useGSAP(() => {
        const t1 = gsap.timeline();

        t1.to([".contact-maintext", ".contact-info2", ".button"], {
            opacity: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".contact",
                start: "top 50%",
                end: "20% 50%",
                scrub: 1,
                // markers: true,
            },
        });
    });

    return (
        <>
            <section className="contact" id="contact-session">
                <div className="contact-info">
                    {isMobile ? (
                        <div className="contact-maintext">
                            <h1 className="heading2 contact-info1">
                                Let's Work
                            </h1>{" "}
                            <h1 className="heading2 contact-info1">Together</h1>
                        </div>
                    ) : (
                        <div>
                            <h1 className="heading2 contact-info1 contact-maintext">
                                Let's work together
                            </h1>
                        </div>
                    )}

                    <p className="text2 contact-info2">semuall0108@gmail.com</p>
                    <div
                        className="button btn"
                        ref={buttonRef}
                        onClick={handleClick}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseExit}
                    >
                        <p className="text2 contact-info3">Contact me</p>
                    </div>
                </div>
            </section>
        </>
    );
};
