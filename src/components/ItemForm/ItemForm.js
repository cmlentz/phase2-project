import React, {useState} from 'react';
import './ItemForm.css';

function ItemForm({addItem}) {

  const [formState, setFormState] = useState({
    name: "",
    type: ""
  })

  function handleChange(event) {
    const userInput = event.target.value;
    const fieldName = event.target.name;
    setFormState({
      ...formState,
      [fieldName]: userInput
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    const item = {
      name: formState.name,
      type: formState.type
    };
    addItem(item);
  }

  return (
    <div className="item-form">
      <h2 className="item-form-heading">Return an Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
          name="name" 
          type="text" 
          value={formState.name}
          onChange={handleChange}
          />
        </label>
        <label>
          Type:
          <input 
          name="type" 
          type="text" 
          value={formState.type}
          onChange={handleChange}
          />
        </label>
        <button type="submit">Donate Item</button>
      </form>
    </div>
  )
}

export default ItemForm;