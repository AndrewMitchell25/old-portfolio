import React from "react";
import { motion } from "framer-motion";

export default function Project(props){
    if(props.type === 1){
        return(
            <div className="row my-5 align-items-center">
                <div className="col-md mx-auto">
                    <h3>{props.title}</h3>
                    <p>
                        {props.text}
                    </p> 
                    <div className="row">
                        <div className="col-6">
                            <a href={props.gLink} target="blank" className="">
                                <motion.button className="github-button"
                                    whileHover={{ scale: 1.2 }}>
                                        <i className="bi bi-github"></i>
                                        Github
                                </motion.button>
                            </a>
                        </div>
                        <div className="col-6">
                            <a href={props.projLink} target="blank" className="">
                                <motion.button className="project-button"
                                    whileHover={{ scale: 1.2 }}>
                                        View Project
                                </motion.button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="project-image">
                        <img src={props.image} alt={props.title}/>
                    </div>
                </div>
            </div>
        );
    } else if(props.type === 2){
        return(
            <div className="row align-items-center">
                <div className="col-md-7 mx-auto">
                    <div className="project-image">
                        <img src={props.image} alt={props.title}/>
                    </div>
                </div>
                <div className="col-sm">
                    <h3>{props.title}</h3>
                    <p>
                        {props.text}
                    </p> 
                    <div className="row">
                        <div className="col-6">
                            <a href={props.gLink} target="blank" className="github-link">
                                <motion.button className="github-button"
                                    whileHover={{ scale: 1.2 }}>
                                        <i className="bi bi-github"></i>
                                        Github
                                </motion.button>
                            </a>
                        </div>
                        <div className="col-6">
                            <a href={props.projLink} target="blank" className="project-link">
                                <motion.button className="project-button col-6"
                                    whileHover={{ scale: 1.2 }}>
                                        View Project
                                </motion.button>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}