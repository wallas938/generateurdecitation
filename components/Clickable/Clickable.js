import React from 'react';
import './Clickable.css';

export function Clickable ({ color, handleClick }) { 

    let colorStyle = {backgroundColor: color};
    
    return (
        <div id="clickable">
            <div className="tweet-buttons">
                <input type="button" id="tweet-quote" />
                <input type="button" id="tweet-logo" />
            </div>
            <input type="button" id="new-quote" value="New quote" onClick={handleClick} style={colorStyle}/>
        </div>
        
    )
 }