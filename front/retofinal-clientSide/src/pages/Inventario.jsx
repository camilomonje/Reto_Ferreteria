import React, { useCallback, useState } from "react";
import Table from "../components/Table";
import fetchInventory from "../redux/api/api";

const Inventario = () => {
  const [isLoading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  //const [pageCount, setPageCount] = useState(0);

  const fetchData = useCallback(async function () {
      setLoading(true)
      const json = await fetchInventory()
      setProducts(json)
      //setPageCount(json.total_pages)
      setLoading(false)
  },[]);

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
        data={products}
        fetchData={fetchData}
        //pageCount={pageCount}
      />
      {isLoading && <div>Cargando...</div>}
    </div>
  );
};

export default Inventario;
