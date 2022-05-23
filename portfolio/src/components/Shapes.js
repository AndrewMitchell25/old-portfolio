import React from "react";
import Circle from "./Circle";

export default function Shapes(){
    return(
        <div className="shapes">
            <Circle className="circle blue3 d-sm-block d-none" speed={10} size="140" style={{left: '-3vw', top: '10vh'}}/>
            <Circle className="circle blue3 d-sm-block d-none" speed={10} size="140" style={{left: '50vw', top: '-10vh'}}/>
            <Circle className="circle white1 d-sm-block d-none" speed={-9} size="60" style={{left: '20vw', top: '-15vh'}}/>
            <Circle className="circle blue1 d-sm-block d-none" speed={-6} size="280" style={{left: '70vw', top: '-10vh'}}/>
            <Circle className="circle orange2 d-sm-block d-none" speed={-8} size="140" style={{left: '65vw', top: '-50vh'}}/>
            <Circle className="circle blue2 d-sm-block d-none" speed={-3} size="120" style={{left: '95vw', top: '-70vh'}}/>
            <Circle className="circle blue4 d-sm-block d-none" speed={-1} size="50" style={{left: '70vw', top: '-52vh'}}/>
            <Circle className="circle blue6 d-sm-block d-none" speed={2} size="110" style={{left: '50vw', top: '-60vh'}}/>
            <Circle className="circle blue2 d-sm-block d-none" speed={-2} size="300" style={{left: '20vw', top: '-60vh'}}/>
            <Circle className="circle orange3 d-sm-block d-none" speed={11} size="80" style={{left: '5vw', top: '-115vh'}}/>
        </div>
    );
}