import React from 'react';

const List = (props) => {
  return (
    <div className='list'>
      <ul>
        <ul>{props.favoritesList.name}</ul>
      </ul>
    </div>
  );
};

export default List;
