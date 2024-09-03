//Dependencies
import gsap from "gsap";

//Hooks
import { useEffect, useRef, useState } from "react";

//Styles
import "../index.css";
import "../styles/MoreProject.css";

//Components
import { SmallProjectCard } from "./SmallProjectCard";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const MoreProject = () => {
    return (
        <section className="mp-container">
            <SmallProjectCard key={phlo.name} project={phlo} />
            <SmallProjectCard key={repit.name} project={repit} />
            <SmallProjectCard
                key={ChickenSurvivors.name}
                project={ChickenSurvivors}
            />
        </section>
    );
};

const phlo = {
    name: "phlo",
    github: "https://github.com/samueljsong/phlo-c",
    description:
        "Created a reddit clone that allows users to create custom threads, communities and comments. Focused on the backend.",
};

const repit = {
    name: "repit",
    github: "https://github.com/samueljsong/repit-c",
    description: "Created a report system...",
};
const ChickenSurvivors = {
    name: "ChickenSurvivors",
    github: "https://github.com/samueljsong/ChickenSurvivors",
    description:
        "Created a roguelike game similar to Vampire Survivors. Focused on learning C#.",
};
