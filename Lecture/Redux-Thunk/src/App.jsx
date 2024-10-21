import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Deshboard from "./Pages/Admin/Deshboard"
import User from "./Pages/Admin/User"
import Product from "./Pages/Admin/Product"
import Home from "./Pages/Users/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* admin route */}
        <Route path="/admin" element={<Deshboard />} />
        <Route path="/admin/users" element={<User />} />
        <Route path="/admin/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
