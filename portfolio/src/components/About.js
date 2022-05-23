import { motion } from "framer-motion";

export default function About() {

    return(
        <div className="about">
            <h1 className="about-title ">About Me</h1>
            <div className="about-text">
                <p>Hi! I'm Andrew Mitchell!</p>  
                <p>I am an undergraduate student at the University of Notre Dame,
                    currently studying to get a Bachelor's Degree of Science in Computer Engineering. I have been 
                    programming in some form or another since 5th grade and it has become a passion of mine. I am
                    always searching for new things to learn, and I enjoy proplem-solving.
                </p>
                <motion.div className="resume-button" whileHover={{ scale: 1.2 }}>
                    <a className="resume-link" href={process.env.PUBLIC_URL + "AndrewMitchellResume.pdf"} target="_blank">Download My Resume</a>
                </motion.div>
            </div>
            <div className="svgDesign">

            </div>
        </div>
    );
}