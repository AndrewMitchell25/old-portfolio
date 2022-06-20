import React from "react";
import { motion } from "framer-motion";


export default function MiniProject(props){
    return(
        <div className="miniproject flex-column">
            <h3 className="">{props.title}</h3>
            <div className="miniproject-image">
                <img src={props.image} alt={props.title}/>
            </div>
            <p>{props.text}</p>
            <div className="row">
                <div className="col-md-6">
                    <a href={props.gLink} target="_blank" rel="noreferrer">
                        <motion.button className="mini-git-button" whileHover={{ scale: 1.2 }}>
                            <i className="bi bi-github"></i>
                                    Github
                        </motion.button>
                    </a>
                </div>
                <div className="col-md-6">
                    <a href={props.projLink} target="_blank" rel="noreferrer">
                        <motion.button className="mini-proj-button" whileHover={{ scale: 1.2 }}>
                            View Project
                        </motion.button>
                    </a>
                </div>
            </div>
        </div>
    );
}