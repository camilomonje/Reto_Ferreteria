import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const Navbar = () => {

    const {logout} = useAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        await logout();
        navigate('/')
      };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-slate-700 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        {/* <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> */}
        <span className="font-semibold text-xl tracking-tight">
          Ferreteria SofkaU
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-slate-300 hover:text-white mr-4"
          >
            Home
          </Link>
          <Link
            to="/inventario"
            className="block mt-4 lg:inline-block lg:mt-0 text-slate-300 hover:text-white mr-4"
          >
            Inventario
          </Link>
          <Link
            to="/factura"
            className="block mt-4 lg:inline-block lg:mt-0 text-slate-300 hover:text-white mr-4"
          >
            Historial Factura
          </Link>
          <Link
            to="/gfactura"
            className="block mt-4 lg:inline-block lg:mt-0 text-slate-300 hover:text-white mr-4"
          >
            Nueva Factura
          </Link>
          <Link
            to="/proveedores"
            className="block mt-4 lg:inline-block lg:mt-0 text-slate-300 hover:text-white mr-4"
          >
            Historial Volantes
          </Link>
          <Link
            to="/volante"
            className="block mt-4 lg:inline-block lg:mt-0 text-slate-300 hover:text-white mr-4"
          >
            Nuevo Volante
          </Link>
          
        </div>
        <div>
        <button onClick={handleLogout}
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        
        >logout</button>

          {/* <Link
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Download
          </a> */}
        </div>
      </div>
    </nav>

    //     //   <nav className='flex items-center justify-between flex-wrap p-6'>
    //     //       <div className="navbar-left">
    //     //       <img src={Logo} alt="logo" className="nav-logo" />
    //     //           <ul>
    //     //               <li>
    //     //                   <Link to="/">Home</Link>
    //     //               </li>
    //     //               <li>
    //     //                   <Link to="/inventario">Inventario</Link>
    //     //               </li>
    //     //               <li>
    //     //                   <Link to="/proveedores">Proveedores</Link>
    //     //               </li>
    //     //               <li>
    //     //                   <Link to="/volante">Generar Volante</Link>
    //     //               </li>
    //     //               <li>
    //     //                   <NavLink to="/factura">Facturas</NavLink>
    //     //                   {/* <Link to="/factura">Facturas</Link> */}
    //     //               </li>
    //     //               <li>
    //     //                   <Link to="/gfactura">Generar Factura</Link>
    //     //               </li>
    //     //           </ul>
    //     //       </div>
    //     //   </nav>
  );
};

export default Navbar;
