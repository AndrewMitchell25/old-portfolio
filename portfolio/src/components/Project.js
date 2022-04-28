import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Project(props){
    if(props.type === 1){
        return(
            <div className="row my-5">
                <div class="col-sm mx-auto">
                    <h3>{props.title}</h3>
                    <p>
                        {props.text}
                    </p> 
                    <motion.div className="github-button"
                        whileHover={{ scale: 1.2 }}>

                        <Link to={props.gLink} className="github-link">
                            <i className="bi bi-github"></i>
                            Github
                        </Link>
                    </motion.div>
                    <motion.div className="project-button"
                        whileHover={{ scale: 1.2 }}>

                        <Link to={props.gLink} className="github-link">
                            <i className="bi bi-github"></i>
                            Github
                        </Link>
                    </motion.div>
                    <hr class="d-sm-none" />
                </div>
                <div class="col-7">
                    <p>
                        Hello there i dont know what im doing
                    </p>
                </div>
            </div>
        );
    } else if(props.type === 2){
        return(
            <div className="row">
                <div class="col-7 mx-auto">
                    <p>
                        Hello there i dont know what im doing
                    </p>
                    <hr class="d-sm-none" />
                </div>
                <div class="col-sm">
                    <h3>{props.title}</h3>
                    <p>
                        {props.text}
                    </p> 
                </div>
            </div>
        );
    }
}