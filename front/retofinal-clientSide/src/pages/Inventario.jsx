import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navigation/Navbar";
import TableInventory from "../components/Table";
import api from '../redux/api/apiInventory.js'


const Inventario = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(api.fetchInventory())
  }, [dispatch]);

  const selector = useSelector(state => state)
  const data = selector.inventory

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id", // accessor is the "key" in the data
      },
      {
        Header: "Nombre",
        accessor: "nombreProducto",
      },
      {
        Header: "Precio",
        accessor: "precioUnitario",
      },
      {
        Header: "Cantidad",
        accessor: "cantidad",
      },
      {
        Header: "Min",
        accessor: "minimaCantidad",
      },
      {
        Header: "Max",
        accessor: "maximaCantidad",
      },   
    ],
    []
  );


  return (
    <div className="h-screen">
    <Navbar />
    <div className="bg-slate-300 flex-column  text-black">
      <h1 className="text-xl mb-4">        
        <strong>Inventario!</strong>
      </h1>
      <div className="flex justify-center">
      <TableInventory
        columns={columns}
        data={data}
      />
      </div>
    </div>
    </div>
  );
};

export default Inventario;
