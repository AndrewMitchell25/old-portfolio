import React from "react";
import Circle from "./Circle";

export default function Shapes(){
    return(
        <div className="shapes">
            <Circle className="circle blue1" speed={-12} size="250" style={{transform: 'translateX(75vw)', top: '35vh'}}/>
            <Circle className="circle blue3" speed={10} size="140" style={{transform: 'translateX(60vw)', top: '10vh'}}/>
            <Circle className="circle orange2" speed={8} size="130" style={{transform: 'translateX(70vw)', top: '30vh'}}/>
            <Circle className="circle white1 d-sm-block d-none" speed={9} size="60" style={{transform: 'translateX(25vw)', top: '30vh'}}/>
            <Circle className="circle blue2" speed={-5} size="300" style={{transform: 'translateX(10vw)', top: '80vh'}}/>
            <Circle className="circle blue2" speed={-12} size="120" style={{transform: 'translateX(95vw)', top: '20vh'}}/>
            <Circle className="circle blue4" speed={-12} size="50" style={{transform: 'translateX(76vw)', top: '60vh'}}/>

        </div>
    );
}