import { BrowserRouter, Route, Routes } from "react-router-dom"
import Form from "./Pages/Form"
import Table from "./Pages/Table"
import './App.css';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/add" element={<Form />} />
      <Route path="/" element = {<Table />} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
