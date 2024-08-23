//Dependencies
import gsap from "gsap";

//Hooks
import { useEffect, useRef, useState } from "react";

//Styles
import "../index.css";
import "../styles/Project.css";

//Components
import { ProjectCard } from "./ProjectCard";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const Project = () => {
    useGSAP(() => {
        gsap.from(".portfolio, .greenbanana, .flaker", {
            y: 200,
            ease: "power2.out",
            stagger: 0.1,

            scrollTrigger: {
                trigger: ".project-section",
                start: " 60% 40%",
                end: "40% 60%",
                // markers: true,
            },
        });
    });

    return (
        <section className="project-section">
            <div className="projectCard-wrapper">
                <ProjectCard
                    id={"portfolio"}
                    title={"Portfolio Website"}
                    num={"01"}
                    description={portfolioDescription}
                />
            </div>
            <div className="projectCard-wrapper">
                <ProjectCard
                    id={"greenbanana"}
                    title={"GreenBanana"}
                    num={"02"}
                    description={greenbananaDescription}
                />
            </div>
            <div className="projectCard-wrapper">
                <ProjectCard
                    id={"flaker"}
                    title={"Flaker"}
                    num={"03"}
                    description={flakerDescription}
                />
            </div>
            <h3 className="project-section-work heading4">WORK</h3>
        </section>
    );
};

const portfolioDescription = "";
const greenbananaDescription = "";
const flakerDescription = "";
