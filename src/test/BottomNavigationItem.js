// @ts-check
import React from "react";

export default function BottomNavigationItem(props) {
    const { icon, label, active, makeActive } = props;
    const size = 40;

    let newClass = "bottom-navigation-item-wrapper";
    if(active) {
        newClass += " active";
    }

    return <div className={newClass} onClick={makeActive}>
        <img width={size}
            height={size}
            src={icon} />
        <label style={{marginTop:"5px"}}>{label}</label>
    </div>
}