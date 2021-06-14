import React, {useState, useEffect} from 'react';
import ItemForm from '../ItemForm/ItemForm';
import Item from '../Items/Item';
import './ItemContainer.css';

function ItemContainer() {

  const [items, setItems] = useState([]);

  useEffect (() => {
    fetch('https://goin-fishin-cml.herokuapp.com/items')
    .then(res => res.json())
    .then(itemData => setItems(itemData))
  }, [])

  function deleteItem(itemId) {
    fetch(`https://goin-fishin-cml.herokuapp.com/items/${itemId}`, {method: "DELETE"})
      .then(res => res.json())
      .then(() => {
        const newItems = items.filter(item => item.id !== itemId);
        setItems(newItems);
      })
  }

function addItem(Item) {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Item)
  }

  fetch('https://goin-fishin-cml.herokuapp.com/items', config)
    .then(res => res.json())
    .then(newItem => {
      const newItems = [...items, newItem];
      setItems(newItems);
    })
} 

  return (
    <div className="item-container">
      <ItemForm addItem={addItem}/>
      {items.map(item => {
        return <Item 
                key={item.id} 
                item={item} 
                deleteItem={deleteItem}
                />
      }) }
    </div>
  )
}

export default ItemContainer;