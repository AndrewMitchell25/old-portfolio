import React from "react";

export default function MiniProject(props){
    return(
        <div className="miniproject flex-column">
            <h3 className="">{props.title}</h3>
            <div className="miniproject-image">
                <img src={props.image} alt={props.title}/>
            </div>
        </div>
    );
}