import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    <div className="App">
      <h1>        
        Inventario!
      </h1>
      <TableInventory
        columns={columns}
        data={data}
      />
    </div>
  );
};

export default Inventario;
