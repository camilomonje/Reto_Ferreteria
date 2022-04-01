import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../components/Table";
import fetchInventory from "../redux/actions/action";
import api from "../redux/api/api"


const Inventario = () => {
  const [isLoading, setLoading] = useState(false);
  //const [products, setProducts] = useState([]);


  const dispatch = useDispatch()
   

  useEffect(() => {
    dispatch(fetchInventory())
  }, [dispatch]);

  

  //setProducts(selector.inventory)

  //console.log(products)


  // const fetchData = useCallback(async function () {
  //     setLoading(true)
  //     const json = await api.fetchInventory()
  //     setProducts(json)
  //     setLoading(false)
  // },[]);

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
      <Table
        columns={columns}
        //data={selector.inventory}
        //fetchData={fetchData}
      />
      {isLoading && <div>Cargando...</div>}
    </div>
  );
};

export default Inventario;
