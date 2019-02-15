import React from 'react';
import { Citation } from '../Citation/Citation.js';
import { Author } from '../Author/Author.js';
import { Clickable } from '../Clickable/Clickable.js';
import './QuoteBox.css';

export function QuoteBox (props) {
    
        return (
            <div id="quote-box">
                <Citation color={props.color} citationId={props.currentData.id} citation={props.currentData.citation} />
                <Author color={props.color} author={props.currentData.author} />
                <Clickable color={props.color} handleClick={props.handleClick} />
            </div>
        )
    }