//Dependencies
import gsap from "gsap";

//Hooks
import { useEffect, useRef, useState } from "react";

//Styles
import "../index.css";
import "../styles/SmallProjectCard.css";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const SmallProjectCard = ({ project }) => {
    const gitMouseEnter = () => {
        gsap.to(`.${project.name}`, {
            y: -5,
            duration: 0.1,
            color: "var(--highlight)",
            borderColor: "var(--highlight)",
        });
    };

    const gitMouseExit = () => {
        gsap.to(`.${project.name}`, {
            y: 0,
            duration: 0.1,
            color: "var(--tertiary)",
            borderColor: "var(--tertiary)",
        });
    };

    return (
        <div className="spc-container">
            <div className="spc-infocontainer">
                <div className="spc-firstpart">
                    <h3 className="heading2">{project.name}</h3>
                    <div className="spc-line"></div>
                    <p className="text">{project.description}</p>
                </div>
                <div>
                    <a
                        href={project.github}
                        target="_blank"
                        className={`text2 spc-github btn ${project.name}`}
                        onMouseEnter={gitMouseEnter}
                        onMouseLeave={gitMouseExit}
                    >
                        Github
                    </a>
                </div>
            </div>
        </div>
    );
};
