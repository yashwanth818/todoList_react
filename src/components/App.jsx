import React, { useState } from "react";
import List from "./List";

function App() {
  function delete_clicked(id) {
    onclick((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function list_creator(Item, itemIndex) {
    return (
      <List
        key={itemIndex}
        id={itemIndex}
        item={Item}
        delete={delete_clicked}
      />
    );
  }
  const [item, click] = useState("");
  const [items, onclick] = useState([]);
  function item_entered(event) {
    click(event.target.value);
  }

  function clicked() {
    if (item !== "") {
      onclick((prevItems) => {
        return [...prevItems, item];
      });
      click("");
    }
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={item_entered} type="text" value={item} />
        <button onClick={clicked}>
          <span>Add</span>
        </button>
      </div>

      {items.map(list_creator)}
    </div>
  );
}

export default App;
