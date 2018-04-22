// @ts-check

import React from "react";
function Avatar({size, src, children}) {
    return <div className="avatar-wrapper">
        <img width={size} height={size} src={src}/>
        <p className="avatar-content">{children}</p>
    </div>
}

export default Avatar;