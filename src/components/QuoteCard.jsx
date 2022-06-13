import React from 'react';
import './QuoteCard.css';

const QuoteCard = (props) => {
    console.log("props : ", props)
    return (
    <div className="QuoteCard">
        <img
        src={props.simpson.image}
        alt={props.simpson.character}
        />
        <h1 >{props.simpson.character}</h1>
        <p>{props.simpson.quote}</p>        
    </div>
    );
};

export default QuoteCard;