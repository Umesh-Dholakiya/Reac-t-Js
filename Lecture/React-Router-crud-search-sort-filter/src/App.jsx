import React, { useState } from "react";
import AddItem from "./pages/Add";
import EditItem from "./pages/Edit";
import ViewItems from "./pages/View";


const App = () => {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState({ title: "", description: "" });

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const editItem = (item) => {
    setEditing(true);
    setCurrentItem(item);
  };

  const updateItem = (updatedItem) => {
    setItems(
      items.map((item) =>
        item.title === currentItem.title ? updatedItem : item
      )
    );
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <EditItem currentItem={currentItem} updateItem={updateItem} />
      ) : (
        <AddItem addItem={addItem} />
      )}
      <ViewItems items={items} deleteItem={deleteItem} editItem={editItem} />
    </div>
  );
};

export default App;
