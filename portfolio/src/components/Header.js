import React from "react"
import {Parallax} from "react-scroll-parallax"
import Circle from "./Circle";

export default function Header() {

    return(
        <div>
            <header className="main-hero">
                <div className="main-hero-text">
                    <h1 className="main-hero-title">Andrew Mitchell</h1>
                    <h3 className="main-hero-subtitle">Computer Engineering Undergraduate Student</h3>
                </div>
            </header>
            <div className="shapes">
                <Circle className="blue1" speed={-12} size="250"/>
                <div className="blue2" >
                    <Parallax speed={8}>
                        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="50" fill="currentColor"/>
                        </svg>
                    </Parallax>
                </div>
                <div className="orange1">
                    <Parallax speed={-5}>
                        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="50" fill="currentColor"/>
                        </svg>
                    </Parallax>
                </div>
                <div className="white1">
                    <Parallax speed={-8}>
                        <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="50" fill="currentColor"/>
                        </svg>
                    </Parallax>
                </div>
            </div>
        </div>
    );
}