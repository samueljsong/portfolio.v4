//Dependencies
import gsap from "gsap";

//Hooks
import { useEffect, useRef, useState, useContext } from "react";
import ModalContext from "../context/ModalContext";

//Styles
import "../index.css";
import "../styles/ProjectCard.css";

//Images
import bottomright from "../assets/img/bottomright.svg";

//Components
import { InfiniteMarquee } from "./Marquee";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const ProjectCard = ({ id, title, num, project, openModalHandler }) => {
    const toggleModal = useContext(ModalContext);

    const onMouseOverCardHandler = () => {
        gsap.to(`.${id} > .project-top > .arrow-container`, {
            rotation: -90,
            border: "solid 1px var(--highlight)",
            duration: 0.5,
            ease: "power2.out",
        });

        gsap.to(`.${id} > .project-bottom > .project-title`, {
            color: "var(--highlight)",
            duration: 0.5,
            ease: "power2.out",
        });
    };

    const onMouseLeaveCardHandler = () => {
        gsap.to(`.${id} > .project-top > .arrow-container`, {
            rotation: 0,
            border: "solid 1px var(--primary)",
            duration: 0.5,
            ease: "power2.out",
        });

        gsap.to(`.${id} > .project-bottom > .project-title`, {
            color: "var(--primary)",
            duration: 0.5,
            ease: "power2.out",
        });
    };

    return (
        <>
            <div
                className={`project-card-container ${id}`}
                onMouseEnter={onMouseOverCardHandler}
                onMouseLeave={onMouseLeaveCardHandler}
                onClick={toggleModal}
            >
                <div className="project-top">
                    <h3 className="heading2 project-num">{num}</h3>
                    <div className={`arrow-container`}>
                        <img className="arrow" src={bottomright} alt="" />
                    </div>
                </div>
                <div className="project-bottom">
                    <h3 className={`project-title heading2 `}>{title}</h3>
                    <p className="project-information text">
                        {project.description}
                    </p>
                </div>
                <InfiniteMarquee tech={project.tech}></InfiniteMarquee>
            </div>
        </>
    );
};
