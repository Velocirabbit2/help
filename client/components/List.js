import React from 'react';

const List = (props) => {
  return (
    <div className='list'>
      <a href={props.favoritesList.url}>{props.favoritesList.name}</a>
      &nbsp;
      <button
        className='delete'
        onClick={() => {
          props.deleteFavorite(props.favoritesList.id);
        }}
      >
        X
      </button>
    </div>
  );
};

export default List;
