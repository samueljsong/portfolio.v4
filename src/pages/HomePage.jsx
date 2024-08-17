//Dependencies
import gsap from "gsap";

//Hooks
import { useEffect, useRef, useState } from "react";

//Styles
import "../index.css";
import "../styles/HomePage.css";

import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const HomePage = () => {
    return (
        <>
            <section className="about">
                <div className="about-info">
                    <h3 className="text text-md">
                        👋🏻, my name is Samuel and I'm a
                    </h3>
                    <h1 className="heading software">SOFTWARE DEVELOPER</h1>
                    <h1 className="heading developer">SOFTWARE DEVELOPER</h1>
                    <h3 className="text location text-md">
                        based in Surrey BC
                    </h3>
                </div>
            </section>
        </>
    );
};
