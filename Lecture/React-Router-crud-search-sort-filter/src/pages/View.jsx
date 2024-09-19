import React from "react";
import './style.css'


const ViewItems = ({ items, deleteItem, editItem }) => {
  return (
    <div className="view-container">
      <h2>Items List</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => editItem(item)}>Edit</button>
                <button onClick={() => deleteItem(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewItems;
