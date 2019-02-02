import React from 'react';
import './Author.css';

export function Author ({ color, author }) {              

    let colorStyle = {color: color};
    
    return (
        <div id="author" style={colorStyle}>{author}</div>
    )
 }