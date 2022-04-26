import React from "react";
import { Parallax } from "react-scroll-parallax";

export default function Circle(props){
    return(
        <div className={props.className} style={props.style}>
            <Parallax speed={props.speed}>
                <svg width={props.size} height={props.size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="currentColor"/>
                </svg>
            </Parallax>
        </div>
    );
}