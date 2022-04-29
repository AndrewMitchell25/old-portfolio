import React from "react";
import { motion } from "framer-motion";

export default function Transition(){
    return(
        <>
            <motion.div className="transition transition1" initial={{x:0}} animate={{x: -window.innerWidth, transition:{delay: .3, duration: .3, ease:"easeInOut"}, transitionEnd: {display: "none"}}} exit={{display: "block", x: 0, transition:{delay: .1, duration: .3, ease: "easeInOut"}}}/>
            <motion.div className="transition transition2" initial={{x:0}} animate={{x: -window.innerWidth, transition:{delay: .2, duration: .3, ease:"easeInOut"}, transitionEnd: {display: "none"}}} exit={{display: "block", x: 0, transition:{delay: .2, duration: .3, ease: "easeInOut"}}}/>
            <motion.div className="transition transition3" initial={{x:0}} animate={{x: -window.innerWidth, transition:{delay: .1, duration: .3, ease:"easeInOut"}, transitionEnd: {display: "none"}}} exit={{display: "block", x: 0, transition:{delay: .3, duration: .3, ease: "easeInOut"}}}/>    
        </>
    );
}