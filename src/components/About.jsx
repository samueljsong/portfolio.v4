//Dependencies
import gsap from "gsap";

//Hooks
import { useEffect, useRef, useState } from "react";

//Styles
import "../index.css";
import "../styles/About.css";

//Components
import { ProjectCard } from "./ProjectCard";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const About = () => {
    useGSAP(() => {
        const t1 = gsap.timeline();

        t1.from(".about-text", {
            y: +130,
            stagger: 0.1,
            duration: 3,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".landingHome",
                start: "70% 20%",
                end: "bottom 10%",
                scrub: 1,
                // markers: true,
            },
        });
    });

    return (
        <section className="about">
            <div className="about-container">
                <div className="about-info-container">
                    {/* <h2 className="heading2 about-text">
                        Hey I'm <span className="about-name">Samuel</span>, a
                        software
                    </h2>
                    <h2 className="heading2 about-text">
                        developer currently looking
                    </h2>
                    <h2 className="heading2 about-text">
                        for new opportunities
                    </h2>
                    <h2 className="heading2 about-text">
                        to expand my skillset.
                    </h2> */}
                    <div className="about-text-container">
                        <span className="heading2 about-text">Hey</span>
                        <span className="heading2 about-text">I'm</span>
                        <span className="heading2 about-text">
                            <span className="about-name">Samuel</span>,
                        </span>
                        <span className="heading2 about-text">a</span>
                        <span className="heading2 about-text">software</span>
                    </div>
                    <div className="about-text-container">
                        <span className="heading2 about-text">developer</span>
                        <span className="heading2 about-text">currently</span>
                        <span className="heading2 about-text">looking</span>
                    </div>
                    <div className="about-text-container">
                        <span className="heading2 about-text">for</span>
                        <span className="heading2 about-text">new</span>
                        <span className="heading2 about-text">
                            opportunities
                        </span>
                    </div>
                    <div className="about-text-container">
                        <span className="heading2 about-text">to</span>
                        <span className="heading2 about-text">expand</span>
                        <span className="heading2 about-text">my</span>
                        <span className="heading2 about-text">skillset.</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
