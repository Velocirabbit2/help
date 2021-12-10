import React, { useState, useEffect } from 'react';
import axios from 'axios';

import List from './List.js';

const Favorites = () => {
  const [allFavorites, setFavorite] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/favorites').then((res) => {
      setFavorite(res.data);
    });
  }, [allFavorites]);

  const handleShowDelete = () => {
    var x = document.getElementById('toggleList');
    if (x.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }
  };

  return (
    <div id='favoritesList' className='favoritesList'>
      <button
        className='favorites'
        onClick={() => {
          handleShowDelete();
        }}
      >
        Show Favorites
      </button>

      <div id='toggleList' className='toggleList'>
        {allFavorites.map((favorite, key) => {
          return <List key={key} favoritesList={favorite} />;
        })}
      </div>
    </div>
  );
};

export default Favorites;
