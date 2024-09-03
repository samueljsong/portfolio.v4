//Dependencies
import gsap from "gsap";

//Hooks
import { useEffect, useRef, useState } from "react";

//Styles
import "../index.css";
import "../styles/Modal.css";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const Modal = ({ toggleModal, modalTitle, githubLink, link }) => {
    useGSAP(() => {
        const t1 = gsap.timeline();

        t1.from(".modal", {
            y: "100%",
            duration: 0.5,
            ease: "power4.out",
        });
    });

    const handleMouseEnter = () => {
        gsap.to(".link", {
            y: -5,
            duration: 0.1,
            color: "var(--highlight)",
            borderColor: "var(--highlight)",
        });
    };

    const handleMouseExit = () => {
        gsap.to(".link", {
            y: 0,
            duration: 0.1,
            color: "var(--primary)",
            borderColor: "var(--primary)",
        });
    };

    const gitMouseEnter = () => {
        gsap.to(".githubLink", {
            y: -5,
            duration: 0.1,
            color: "var(--highlight)",
            borderColor: "var(--highlight)",
        });
    };

    const gitMouseExit = () => {
        gsap.to(".githubLink", {
            y: 0,
            duration: 0.1,
            color: "var(--primary)",
            borderColor: "var(--primary)",
        });
    };

    return (
        <>
            <div className="modal-container" onClick={toggleModal}></div>
            <div className="modal">
                <h3 className="heading2">{modalTitle}</h3>
                <a
                    href={link}
                    target="_blank"
                    className="btn text2 buttonText link"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseExit}
                >
                    Visit
                </a>
                <a
                    href={githubLink}
                    target="_blank"
                    className="btn text2 buttonText githubLink"
                    onMouseEnter={gitMouseEnter}
                    onMouseLeave={gitMouseExit}
                >
                    Github
                </a>
            </div>
        </>
    );
};
