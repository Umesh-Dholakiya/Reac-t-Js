import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './AddForm.css';

function AddForm({ addRecord, updateRecord, records }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [record, setRecord] = useState({ name: '', phone: '', email: '', status: 'active' });

  useEffect(() => {
    if (id && records) {
      const recordEdit = records.find((rec) => rec.id === Number(id));
      if (recordEdit) setRecord(recordEdit);
    }
  }, [id, records]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateRecord(record);
    } else {
      addRecord(record);
    }
    navigate('/');
  };

  return (
    <div className="add-form-container">
      <h2>{id ? 'Edit User' : 'Add User'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={record.name}
          onChange={(e) => setRecord({ ...record, name: e.target.value })}
        />
        <button type="submit" className="submit-button">
          {id ? 'Update' : 'Add'} User
        </button>
      </form>
    </div>
  );
}

export default AddForm;
