import React from 'react';

const Nabar = () => {
    return (
        <div>

            <ul>
                <li className='nav-item'>home#</li>
                <li className='nav-item'>home#</li>
                <li className='nav-item'>home#</li>
                {/* 
                    TODO:
                    depending upon the login_status of App.js 
                    if logged in, 
                        display the text as logout and vice versa
                */}
                <li className='nav-item'><button>login</button></li>

                {/* 
                    TODO:
                    while clicking logout, the state of app.js should be changed to false  
                    andn while clicking login, the state of app.js should be changed to true  
                        
                */}
            </ul>
        </div>
    );
}

/* 
TODO: do necessary exports.
*/