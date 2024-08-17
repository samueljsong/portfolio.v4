//Dependencies
import gsap from "gsap";

//Hooks
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

//Styles
import "../index.css";
import "../styles/PageTransition.css";

import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const PageTransition = () => {
    return (
        <div className="block-container">
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
        </div>
    );
};

export const pageTransitionHandler = async () => {
    await gsap.to(".block", {
        stagger: 0.1,
        marginTop: 0,
        duration: 0.5,
    });

    gsap.to(".landing, .copyright", {
        display: "none",
    });

    await gsap.to(".block", {
        stagger: 0.1,
        marginTop: "100%",
        duration: 0.7,
        delay: 0.5,
    });
};
