//Dependencies
import gsap from "gsap";

//Hooks
import { useEffect, useRef, useState } from "react";

//Components
import { Contact } from "../components/Contact";
import { Copyright } from "../components/Copyright";
import { Separation } from "../components/Separation";
import { Project } from "../components/Project";
import { About } from "../components/About";
import { Modal } from "../components/Modal";
import { MoreProject } from "../components/MoreProject";
import { LandingPage } from "./LandingPage";

//Context
import ModalContext from "../context/ModalContext";

//Styles
import "../index.css";
import "../styles/HomePage.css";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
// import ReactLenis from "libs/lenis";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const HomePage = () => {
    const [showModal, setShowModal] = useState(false);

    const [modalTitle, setModalTitle] = useState("");
    const [githubLink, setGithubLink] = useState("");
    const [link, setLink] = useState("");

    const changeGithubLink = (link) => {
        setGithubLink(link);
    };

    const changeLink = (link) => {
        setLink(link);
    };

    const changeModalTitle = (title) => {
        setModalTitle(title);
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const modalFunctions = {
        changeModalTitle: changeModalTitle,
        toggleModal: toggleModal,
        changeGithubLink: changeGithubLink,
        changeLink: changeLink,
    };

    const lenisRef = useRef(null);

    useEffect(() => {
        lenisRef.current = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
            wheelMultiplier: 0.5,
        });

        // Update loop
        const lenis = lenisRef.current;
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <>
            <div className="main-container">
                {showModal ? (
                    <Modal
                        toggleModal={toggleModal}
                        modalTitle={modalTitle}
                        githubLink={githubLink}
                        link={link}
                    />
                ) : (
                    <></>
                )}

                <LandingPage />
                <Separation num={""} text={"WHO AM I?"} side={"right"} />
                <About></About>
                <Separation num={"MY WORK"} text={""} side={"left"} />
                <ModalContext.Provider value={modalFunctions}>
                    <Project />
                </ModalContext.Provider>
                <Separation num={""} text={"OTHER WORK"} side={"right"} />
                <ModalContext.Provider value={modalFunctions}>
                    <MoreProject />
                </ModalContext.Provider>
                <Separation num={""} text={"GET IN TOUCH?"} side={"left"} />
                <Contact></Contact>
                <Copyright />
            </div>
        </>
    );
};
