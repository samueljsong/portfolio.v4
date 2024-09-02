//Dependencies
import gsap from "gsap";

//Hooks
import { useEffect, useRef, useState } from "react";

//Styles
import "../index.css";
import "../styles/Modal.css";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const Modal = ({ toggleModal }) => {
    return (
        <>
            <div className="modal-container" onClick={toggleModal}></div>
            <div className="modal">
                <h3 className="heading2">GreenBanana</h3>
                <button className="btn text2 buttonText">VISIT</button>
                <button className="btn text2 buttonText">GITHUB</button>
            </div>
        </>
    );
};
