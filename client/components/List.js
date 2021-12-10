import React from 'react';

const List = (props) => {
  return (
    <div className='list'>
      <a href={props.favoritesList.url}>{props.favoritesList.name}</a>
    </div>
  );
};

export default List;
