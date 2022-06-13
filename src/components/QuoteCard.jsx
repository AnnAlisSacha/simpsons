import React from 'react';
import './QuoteCard.css';

const QuoteCard = ({ props }) => {
    return (
      <div className="QuoteCard">
        <img
          src={props.image}
          alt={props.character}
        />
        <h1 >{props.character}</h1>
        <p>{props.quote}</p>
        
      </div>
    );
  };

export default QuoteCard;