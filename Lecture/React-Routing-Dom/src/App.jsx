import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import View from "./Pages/view";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<View />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit" element={<Edit/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App