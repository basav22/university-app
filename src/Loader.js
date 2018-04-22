// @ts-check

import React from "react";

function Loader({ showLoader }) {
    if (!showLoader)
        return null;

    return <div>Loading...</div>;
}

export default Loader;