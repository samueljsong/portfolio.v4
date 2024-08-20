//Dependencies
import gsap from "gsap";

//Hooks
import { useEffect, useRef, useState } from "react";

//Styles
import "../index.css";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//Image
import linkedIn from "../assets/img/linkedin.svg";
import github from "../assets/img/git.svg";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const Copyright = () => {
    return (
        <div className="copyright">
            <p className="fs-500">@2024 Samuel Song</p>
            <a
                href="https://www.linkedin.com/in/samuel-song-490743234/"
                target="_blank"
            >
                <img src={linkedIn} alt="" className="contact-icon" />
            </a>
            <a href="https://github.com/samueljsong" target="_blank">
                <img src={github} alt="" className="contact-icon" />
            </a>
        </div>
    );
};
