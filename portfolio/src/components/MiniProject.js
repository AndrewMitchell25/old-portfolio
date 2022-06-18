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
                    <a href={props.gLink} target="_blank">
                        <motion.button className="mini-button" whileHover={{ scale: 1.2 }}>Hello</motion.button>
                    </a>
                </div>
                <div className="col-md-6">
                    <a href={props.projLink} target="_blank">
                        <motion.button className="mini-button" whileHover={{ scale: 1.2 }}>Hello</motion.button>
                    </a>
                </div>
            </div>
        </div>
    );
}