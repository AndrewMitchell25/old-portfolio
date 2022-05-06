import React from "react";
import { motion } from "framer-motion";

export default function Project(props){
    if(props.type === 1){
        return(
            <div className="row my-5 align-items-center">
                <div class="col-md mx-auto">
                    <h3>{props.title}</h3>
                    <p>
                        {props.text}
                    </p> 
                    <div className="row">
                        <div className="col-6">
                            <motion.div className="github-button"
                                whileHover={{ scale: 1.2 }}>
                                <a href={props.gLink} target="blank" className="github-link">
                                    <i className="bi bi-github"></i>
                                    Github
                                </a>
                            </motion.div>
                        </div>
                        <div className="col-6">
                            <motion.div className="project-button col-6"
                                whileHover={{ scale: 1.2 }}>
                                <a href={props.projLink} target="blank" className="project-link">
                                    View Project
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <div className="project-image">
                        <img src={props.image} alt={props.title}/>
                    </div>
                </div>
            </div>
        );
    } else if(props.type === 2){
        return(
            <div className="row align-items-center">
                <div class="col-md-7 mx-auto">
                    <div className="project-image">
                        <img src={props.image} alt={props.title}/>
                    </div>
                </div>
                <div class="col-sm">
                    <h3>{props.title}</h3>
                    <p>
                        {props.text}
                    </p> 
                    <div className="row">
                        <div className="col-6">
                            <motion.div className="github-button"
                                whileHover={{ scale: 1.2 }}>
                                <a href={props.gLink} target="blank" className="github-link">
                                    <i className="bi bi-github"></i>
                                    Github
                                </a>
                            </motion.div>
                        </div>
                        <div className="col-6">
                            <motion.div className="project-button col-6"
                                whileHover={{ scale: 1.2 }}>
                                <a href={props.projLink} target="blank" className="project-link">
                                    View Project
                                </a>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}