import React from 'react';
import './Citation.css';
export function Citation (props) {

    let colorStyle = {color: props.color};
    
    return (
        <div id="text" style={colorStyle}>{ props.citation }</div>
    )
 }