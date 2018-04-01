// @ts-check

import React from "react";

// Uncontrolled component - state not passed as a prop
function AddPackageForm({ onAdd, packageId, orderId, amount, setNewData }) {
    let newPackage = {}

    // function addToList() {
    //     // console.log(newPackage);
    //     onAdd();
    // }

    return <div>
        <div>
            <label>PackageId:</label>
            <input
                type="text"
                value={packageId}
                onChange={e => {
                    setNewData('packageId', e.target.value);
                    // newPackage.packageId = e.target.value
                }
                } />
        </div>
        <div>
            <label>OrderId:</label>
            <input type="text" 
                value={orderId}
                onChange={e => {
                    setNewData('orderId', e.target.value);
                }} />
        </div>
        <div>
            <label>Amount:</label>
            <input type="text" 
                value={amount}
                onChange={e => {
                    setNewData('amount', e.target.value);
                }} />
        </div>

        <button onClick={onAdd} type="button">Submit</button>
    </div>
}

export default AddPackageForm;