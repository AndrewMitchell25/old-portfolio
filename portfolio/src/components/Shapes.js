import React from "react";
import Circle from "./Circle";

export default function Shapes(){
    return(
        <div className="shapes">
            <Circle className="circle blue1 d-sm-block d-none" speed={-6} size="250" style={{transform: 'translateX(75vw)', top: '35vh'}}/>
            <Circle className="circle blue3 d-sm-block d-none" speed={10} size="140" style={{transform: 'translateX(60vw)', top: '10vh'}}/>
            <Circle className="circle orange2 d-sm-block d-none" speed={8} size="130" style={{transform: 'translateX(70vw)', top: '30vh'}}/>
            <Circle className="circle white1 d-sm-block d-none" speed={9} size="60" style={{transform: 'translateX(25vw)', top: '30vh'}}/>
            <Circle className="circle blue2 d-sm-block d-none" speed={-2} size="300" style={{transform: 'translateX(10vw)', top: '80vh'}}/>
            <Circle className="circle blue2 d-sm-block d-none" speed={-3} size="120" style={{transform: 'translateX(95vw)', top: '20vh'}}/>
            <Circle className="circle blue4 d-sm-block d-none" speed={12} size="50" style={{transform: 'translateX(76vw)', top: '60vh'}}/>
            <Circle className="circle blue6 d-sm-block d-none" speed={2} size="110" style={{transform: 'translateX(50vw)', top: '65vh'}}/>
            <Circle className="circle blue5 d-sm-block d-none" speed={-1} size="170" style={{transform: 'translateX(-2vw)', top: '0vh'}}/>
            <Circle className="circle orange3 d-sm-block d-none" speed={11} size="50" style={{transform: 'translateX(5vw)', top: '25vh'}}/>

        </div>
    );
}