import React from 'react';
// import App from '../client/App.js';

const Cards = (props) => {
  return (
    <div className='cards'>
      <ul id='card'>
        <ul>
          <img src={props.searchResults.image_url} />
        </ul>
        <button onchange={props.Addfavorites} />
        <ul>
          <b>Name: </b>
          {props.searchResults.name}
        </ul>
        <ul>
          <b>Rating: </b>
          {props.searchResults.rating} Star(s)
        </ul>
        <ul>
          <b>Price: </b>
          {props.searchResults.price}
        </ul>
        <ul>
          <b>Location: </b>
          {props.searchResults.location.display_address[0]},&nbsp;
          {props.searchResults.location.display_address[1]}
        </ul>
      </ul>
    </div>
  );
};

export default Cards;
