import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ViewForm.css';

function ViewForm({ records, deleteRecord, toggleStatus, Delete }) {
  const [selectedIds, setSelectedIds] = useState([]);

  const handleSelect = (id) => {
    setSelectedIds((prevSelected) =>
      prevSelected.includes(id) ? prevSelected.filter((selectedId) => selectedId !== id) : [...prevSelected, id]
    );
  };

  const handleDelete = () => {
    Delete(selectedIds);
    setSelectedIds([]);
  };

  return (
    <div className="view-form-container">
      <h2>Todo List App</h2>
      <Link to="/add" className="add-button">Add New Record</Link>
      <button onClick={handleDelete} disabled={!selectedIds.length} className="delete-selected-button">
        Delete Selected
      </button>
      <table className="records-table">
        <thead>
          <tr>
            <th>Select</th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedIds.includes(record.id)}
                  onChange={() => handleSelect(record.id)}
                />
              </td>
              <td>{record.name}</td>
              <td>
                <button className="edit-button" onClick={() => toggleStatus(record.id)}>
                  {record.status === 'active' ? 'Deactivate' : 'Activate'}
                </button>
              </td>
              <td>
                <Link to={`/edit/${record.id}`} className="edit-button">Edit</Link>
                <button className="delete-button" onClick={() => deleteRecord(record.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewForm;
