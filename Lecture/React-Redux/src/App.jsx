import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./pages/Counter";
import View from "./pages/View";
import Add from "./pages/Add";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/crud" element={<View />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App