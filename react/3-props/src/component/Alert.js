import React from 'react';

const Alert = () => {

    /* 
        TODO:
            make use of props destructuring...
    */

    /* 
        NOTE: donot change anythig below this line
    */
    return (
        <div style={{ padding: "10px", border: "1px solid", "margin": "30px" }}>
            {msg || "send me an alert text"}
        </div>
    );
}

export default Alert;
