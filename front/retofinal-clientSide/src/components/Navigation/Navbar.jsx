import React from 'react';
import { Link, NavLink } from 'react-router-dom';



import '../../assets/styles/components/navbar.scss'
import Logo from '../../assets/img/logo.png'

const Navbar = () => {


    return (
      <nav>
          <div className="navbar-left">
          <img src={Logo} alt="logo" className="nav-logo" />
              <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/inventario">Inventario</Link>
                  </li>
                  <li>
                      <Link to="/proveedores">Proveedores</Link>
                  </li>
                  <li>
                      <Link to="/volante">Generar Volante</Link>
                  </li>
                  <li>
                      <NavLink to="/factura">Facturas</NavLink>
                      {/* <Link to="/factura">Facturas</Link> */}
                  </li>
                  <li>
                      <Link to="/gfactura">Generar Factura</Link>
                  </li>
              </ul>
          </div>
      </nav>      
    );
};

export default Navbar;