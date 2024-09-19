import React, { useState, useEffect } from "react";
import './style.css'


const EditItem = ({ currentItem, updateItem }) => {
  const [formData, setFormData] = useState(currentItem);

  useEffect(() => {
    setFormData(currentItem);
  }, [currentItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateItem(formData);
  };

  return (
    <div className="edit-container">
      <h2>Edit Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <input
          type="text"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditItem;
