import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewForm from './components/ViewForm';
import './App.css';
import AddForm from './components/AddFOrm';

function App() {
  const [record, setRecord] = useState(() => {
    const storedRecords = localStorage.getItem('record');
    return storedRecords ? JSON.parse(storedRecords) : [];
  });

  // Update localStorage whenever record state changes
  useEffect(() => {
    localStorage.setItem('record', JSON.stringify(record));
  }, [record]);

  const addRecord = (newRecord) => {
    setRecord([...record, { ...newRecord, id: Date.now(), status: 'active' }]);
  };

  const deleteRecord = (id) => {
    setRecord(record.filter((record) => record.id !== id));
  };

  const updateRecord = (updatedRecord) => {
    setRecord(record.map((record) => (record.id === updatedRecord.id ? updatedRecord : record)));
  };

  const toggleStatus = (id) => {
    setRecord(
      record.map((record) =>
        record.id === id ? { ...record, status: record.status === 'active' ? 'inactive' : 'active' } : record
      )
    );
  };

  const Delete = (ids) => {
    setRecord(record.filter((record) => !ids.includes(record.id)));
  };

  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<ViewForm records={record} deleteRecord={deleteRecord} toggleStatus={toggleStatus} Delete={Delete} />} />
          <Route path="/add" element={<AddForm addRecord={addRecord} />} />
          <Route path="/edit/:id" element={<AddForm records={record} updateRecord={updateRecord} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
