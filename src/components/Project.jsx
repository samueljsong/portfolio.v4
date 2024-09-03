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
                    project={portfolioDescription}
                />
            </div>
            <div className="projectCard-wrapper">
                <ProjectCard
                    id={"greenbanana"}
                    title={"GreenBanana"}
                    num={"02"}
                    project={greenbananaDescription}
                />
            </div>
            <div className="projectCard-wrapper">
                <ProjectCard
                    id={"flaker"}
                    title={"Flaker"}
                    num={"03"}
                    project={flakerDescription}
                />
            </div>
            <h3 className="project-section-work heading4">WORK</h3>
        </section>
    );
};

const portfolioDescription = {
    description:
        "Created a responsive, interactive website to showcase projects. Implemented GSAP animation to enrich user experience",
    tech: ["GSAP", "React", "Frontend", "UI/UX", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/samueljsong/portfolio.v4",
    link: "https://samuelsong.netlify.app/",
};
const greenbananaDescription = {
    description:
        "Web application that allows users to upload and share images, custom URL's and code snippets.",
    tech: [
        "JavaScript",
        "Cloudinary API",
        "Express",
        "NodeJS",
        "SQL",
        "MongoDB",
        "Full Stack",
    ],
    github: "https://github.com/samueljsong/GreenBanana",
    link: "",
};
const flakerDescription = {
    description:
        "Calendar application used to create global events for friends. Focused on creating a robust database.",
    tech: [
        "React",
        "JavaScript",
        "MongoDB",
        "SQL",
        "Express",
        "NodeJS",
        "Full Stack",
    ],
    github: "https://github.com/samueljsong/Flaker-Client",
    link: "",
};
