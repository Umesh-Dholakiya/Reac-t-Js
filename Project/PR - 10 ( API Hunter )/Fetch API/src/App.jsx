import { BrowserRouter, Route, Routes } from "react-router-dom";
import Data from "./Pages/Data";

function App() {
  return (
    <div align="center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Data />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
