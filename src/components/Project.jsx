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
    return (
        <section className="project-section">
            <ProjectCard
                id={"portfolio"}
                title={"Portfolio Website"}
                num={"01"}
                description={portfolioDescription}
            />
            <ProjectCard
                id={"greenbanana"}
                title={"GreenBanana"}
                num={"02"}
                description={greenbananaDescription}
            />
            <ProjectCard
                id={"flaker"}
                title={"Flaker"}
                num={"03"}
                description={flakerDescription}
            />
            <h3 className="project-section-work heading4">WORK</h3>
        </section>
    );
};

const portfolioDescription = "";
const greenbananaDescription = "";
const flakerDescription = "";
