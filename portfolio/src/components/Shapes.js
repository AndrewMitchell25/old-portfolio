import React from "react";
import Circle from "./Circle";

export default function Shapes(){
    return(
        <div className="shapes">
            <Circle className="circle blue1" speed={-12} size="250" style={{transform: 'translateX(75vw)', top: '50vh'}}/>
            <Circle className="circle blue3" speed={8} size="80" style={{transform: 'translateX(60vw)', top: '70vh'}}/>
            <Circle className="circle orange2" speed={8} size="80" style={{transform: 'translateX(20vw)', top: '15vh'}}/>
            <Circle className="circle white1 d-sm-block d-none" speed={9} size="30" style={{transform: 'translateX(50vw)', top: '70vh'}}/>
            <Circle className="circle blue1" speed={-5} size="250" style={{transform: 'translateX(20vw)', top: '100vh'}}/>
            <Circle className="circle blue2" speed={-12} size="120" style={{transform: 'translateX(95vw)', top: '20vh'}}/>
        </div>
    );
}