import React from "react"
import {Parallax} from "react-scroll-parallax"

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
                <div className="blue1">
                    <Parallax speed={-12}>
                        <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="50" fill="#242a57"/>
                        </svg>
                    </Parallax>
                </div>
                <div className="blue2">
                    <Parallax speed={-5}>
                        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="50" fill="#458699"/>
                        </svg>
                    </Parallax>
                </div>
            </div>
        </div>
    );
}