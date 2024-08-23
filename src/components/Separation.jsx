//Dependencies
import gsap from "gsap";

//Hooks
import { useEffect, useRef, useState } from "react";

//Styles
import "../index.css";
import "../styles/Separation.css";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const Separation = ({ num, text, side }) => {
    return (
        <div className={`separation-main-container separation-${side}`}>
            <div className="separation-container">
                <span className="line"></span>
                <div className="text-container">
                    <h3 className="text3 fs-heading">{num}</h3>
                    <h3 className="text3 fs-heading">{text}</h3>
                </div>
            </div>
        </div>
    );
};
