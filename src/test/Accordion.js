// @ts-check

import React from "react";

export default function Accordion({children}) {
    return <div>
        {children}
    </div>
}

Accordion.Header = function(props) {
    return <div className="header">
        {props.children}
    </div>
}

Accordion.Body = function(props) {
    return <div className="body">
        {props.children}
    </div>
}