import React from 'react';

import Cards from './Cards.js';

const Board = (props) => {
  return (
    <div className='board'>
      {props.searchResults.map((restaurant, key) => {
        return (
          <Cards
            key={key}
            searchResults={restaurant}
            addToFavorites={props.addToFavorites}
          />
        );
      })}
    </div>
  );
};

export default Board;
