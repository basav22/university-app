// @ts-check

import React from "react";
import App2 from "./App2";
import google from "./google.jpeg";
import google2 from "./google-2.png";
import AccordionTest from "./AccordionTest";

function CricbuzzHeader() {
    return <div style={{background: "#000", color: "#eee"}}>
        Cricbuzz Header
    </div>
}

function CricbuzzScoreCard() {
    return <div>
        Cricket Score
    </div>
}

export default function Consumer() {
    const items = [
        { id: 1, label: "Nearby", icon: google2, active: false },
        { id: 2, label: "Recents", icon: google, active: true },
        { id: 3, label: "Favourites", icon: google2, active: false },
    ];

    const items2 = [
        { id: 2, label: "Recents", icon: google, active: true },
    ]   

    return <div>
        <AccordionTest 
            HeaderComp={CricbuzzHeader}
            BodyComp={CricbuzzScoreCard}/>
    </div>
}