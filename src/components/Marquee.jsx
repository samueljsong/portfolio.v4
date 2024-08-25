//Dependencies
import gsap from "gsap";

//Hooks
import { useEffect, useRef, useState } from "react";

//Styles
import "../index.css";
import "../styles/Marquee.css";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const InfiniteMarquee = ({ tech }) => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const marquee = marqueeRef.current;

        // Duplicate the content to create a seamless loop
        marquee.innerHTML += marquee.innerHTML;

        gsap.to(marquee, {
            xPercent: -50, // Adjust this value based on the number of items/width of content
            ease: "none",
            duration: 20, // Adjust speed
            repeat: -1, // Infinite repeat
        });
    }, []);

    return (
        <div className="marquee-container">
            <div className="marquee-content" ref={marqueeRef}>
                {tech.map((x) => {
                    return <span className="text">{x}</span>;
                })}
                {/* <span className="text">Item 1</span>
                <span className="text">Item 2</span>
                <span className="text">Item 3</span>
                <span className="text">Item 4</span>
                <span className="text">Item 5</span> */}
            </div>
        </div>
    );
};
