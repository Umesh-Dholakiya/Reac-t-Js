import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "./Pages/Todo";

function App() {
  return (
    <div align="center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todo /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
