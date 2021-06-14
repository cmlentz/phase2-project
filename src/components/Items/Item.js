import React from 'react';
import './Item.css';

function Item({item, deleteItem}) {

  const {id, name, type} = item

  function handleGetClick() {
      deleteItem(id);
  }

  return (
    <div className="item">
      <h2>{name}</h2>
      <div className="item-desc">
        <p>Type: {type}</p>
      </div>
      <button className="item-btn" onClick={handleGetClick}>Get Now</button>
    </div>
  )
}

export default Item;