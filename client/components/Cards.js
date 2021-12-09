import React from 'react';

const Cards = (props) => {
  return (
    <div className='cards'>
      <ul>
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
          {props.searchResults.location.display_address[0]}, &nbsp;
          {props.searchResults.location.display_address[1]}
        </ul>
      </ul>
    </div>
  );
};

export default Cards;
