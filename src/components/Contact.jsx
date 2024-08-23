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
    };

    return (
        <>
            <section className="contact">
                <div className="contact-info">
                    {isMobile ? (
                        <div>
                            <h1 className="heading2 contact-info1">
                                Let's Work
                            </h1>{" "}
                            <h1 className="heading2 contact-info1">Together</h1>
                        </div>
                    ) : (
                        <h1 className="heading2 contact-info1">
                            Let's work together
                        </h1>
                    )}

                    <p className="text2 contact-info2">jsong113@my.bcit.ca</p>
                    <div
                        className="button btn"
                        ref={buttonRef}
                        onClick={handleClick}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseExit}
                    >
                        <p className="text2 contact-info3">Contact me.</p>
                    </div>
                </div>
            </section>
        </>
    );
};
