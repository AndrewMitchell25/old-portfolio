import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from '../pages/Home';
import ContactMe from '../pages/ContactMe';
import Resume from '../pages/Resume';
import {AnimatePresence} from "framer-motion";

export default function AnimatedRoutes(){

    const location = useLocation();

    return(
        <AnimatePresence exitBeforeEnter={true} initial={false}>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<ContactMe />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </AnimatePresence>
    );
}