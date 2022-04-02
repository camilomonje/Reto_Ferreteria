import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";


import Login from "./containers/Login";
import Factura from "./pages/Factura";
import GVolante from "./pages/GVolante";
import Home from "./pages/Home";
import Inventario from "./pages/Inventario";
import Proveedores from "./pages/Proveedores";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/proveedores" element={<Proveedores />} />
        <Route path="/factura" element={<Factura />} />
        <Route path="/volante" element={<GVolante />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
