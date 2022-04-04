import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "./containers/Login";
import { Register } from "./containers/Register";
import Factura from "./pages/Factura";
import GFactura from "./pages/GFactura";
import GVolante from "./pages/GVolante";
import Home from "./pages/Home";
import Inventario from "./pages/Inventario";
import Proveedores from "./pages/Proveedores";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="bg-slate-300">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/inventario" element={<Inventario />} />
            <Route path="/proveedores" element={<Proveedores />} />
            <Route path="/factura" element={<Factura />} />
            <Route path="/volante" element={<GVolante />} />
            <Route path="/gfactura" element={<GFactura />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
