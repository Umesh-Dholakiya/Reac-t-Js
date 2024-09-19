import React, { useState } from "react";
import './style.css'


const AddItem = ({ addItem }) => {
  const [formData, setFormData] = useState({ title: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(formData);
    setFormData({ title: "", description: "" });
  };

  return (
    <div className="add-container">
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddItem;
