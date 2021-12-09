import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

import Board from './components/Board.js';

const App = () => {
  const [addRestaurant, setNewRestaurant] = useState({
    location: '',
  });
  const [allFavorites, setFavorite] = useState([]);
  const [threeOptions, setOptions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/favorites').then((res) => {
      setFavorite(res.data);
    });
  }, []);

  const onChangeHandler = (event) => {
    event.preventDefault();
    setNewRestaurant({
      [event.target.id]: event.target.value,
    });
  };

  const handleSearchLocation = (newSearch) => {
    console.log(
      axios.post('http://localhost:3000/api/search', newSearch).then((res) => {
        setOptions(res.data);
      })
    );
  };

  console.log('three options array', threeOptions);

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
        <div className='board'>
          <Board searchResults={threeOptions} />
        </div>
      </div>
    </div>
  );
};

export default App;
