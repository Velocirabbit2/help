import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

import Favorites from './components/Favorites.js';
import Board from './components/Board.js';

const App = () => {
  const [addRestaurant, setNewRestaurant] = useState({
    location: '',
  });
  const [threeOptions, setOptions] = useState([]);
  const [allFavorites, setFavorite] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/favorites').then((res) => {
      setFavorite(res.data);
    });
  }, []);

  const onChangeHandler = (event) => {
    setNewRestaurant({
      [event.target.id]: event.target.value,
    });
  };

  const handleSearchLocation = (newSearch) => {
    axios.post('http://localhost:3000/api/search', newSearch).then((res) => {
      setOptions(res.data);
    });
  };

  return (
    <div>
      <h2>unbeatable</h2>
      <div>
        <form>
          <input
            id='location'
            key='location'
            onChange={onChangeHandler}
            value={addRestaurant.location}
            placeholder='Type in a location...'
          />
        </form>
        <button
          className='search'
          onClick={() => {
            handleSearchLocation(addRestaurant);
          }}
        >
          Search
        </button>
      </div>
      <div>
        <div className='searchResults'>
          <Board searchResults={threeOptions} />
        </div>
        <div className='favoritiesList'>
          <Favorites />
        </div>
      </div>
    </div>
  );
};

export default App;
