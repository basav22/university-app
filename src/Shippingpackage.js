// @ts-check

import React from "react";
import "./package-style.css";

export default function ShippingPackage(props) {
    // object destructuring -es6
    const {packageId, orderId, amount} = props;

    const headerWrapperStyle = {
        display: "flex",
        justifyContent: "space-between"
    };
    return <div className="package-wrapper">
        <div style={headerWrapperStyle}>
            <label>Package ID: {packageId}</label>
            <span>Rs. {amount}</span>
        </div>
        <label>Order No: {orderId}</label>
    </div>
}