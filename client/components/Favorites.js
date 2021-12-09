import React, { useState, useEffect } from 'react';
import axios from 'axios';

import List from './List.js';

const Favorites = () => {
  const [allFavorites, setFavorite] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/favorites').then((res) => {
      setFavorite(res.data);
    });
  }, []);

  return (
    <div className='favoritesList'>
      <ul>
        <h2>Favorites:</h2>
        {allFavorites.map((favorite, key) => {
          return <List key={key} favoritesList={favorite} />;
        })}
      </ul>
    </div>
  );
};

export default Favorites;
