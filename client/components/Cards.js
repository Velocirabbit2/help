import React from 'react';
// import App from '../client/App.js';

const Cards = (props) => {
  return (
    <div className='cards'>
      <div id='card'>
        <button
          className='heart'
          onClick={() => {
            props.addToFavorites(props.searchResults);
          }}
        >
          Like
        </button>
        <div>
          <img src={props.searchResults.image_url} />
        </div>
        <div>
          <h2>{props.searchResults.name}</h2>
        </div>
        <div>
          <b>Location: </b>
          {props.searchResults.location.display_address[0]},&nbsp;
          {props.searchResults.location.display_address[1]}
        </div>
        <div>
          <b>Rating: </b>
          {props.searchResults.rating} Star(s)
        </div>
        <div>
          <b>Price: </b>
          {props.searchResults.price}
        </div>
      </div>
    </div>
  );
};

export default Cards;
