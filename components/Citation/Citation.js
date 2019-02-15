import React from 'react';
import './Citation.css';
export function Citation (props) {

    let colorStyle = {color: props.color};
    
    return (
        <p id="text" className="fadeIn" key={props.id} style={colorStyle}>{ props.citation }</p>
    )
 }