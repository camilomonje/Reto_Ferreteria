import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../components/Table.jsx";
import api from '../redux/api/api.js'

const Proveedores = () => {
    const dispatch = useDispatch()

  useEffect(() => {
    dispatch(api.fetchVolantes())
  }, [dispatch]);

  const selector = useSelector(state => state)
  const data = selector.proveedores

  const renderRowSubComponent = useCallback(
    
    ({ row, data }) => (
      <pre
        style={{
          fontSize: '10px',
        }}
      >
        <h1>Productos:</h1>
        {data.map(p => {
          if (p.id === row.values.id){
            return <h2>{p.productoList.map(l => {
              
              return <ul>
                <li>{l.nombreProducto}</li>
                <ul>
                  <li>Cantidad: {l.cantidad} unidades</li>
                  <li>Precio Unitario: ${l.precio}</li>
                </ul>
              </ul>;
            })}</h2>
          }
          return "";
        } )}
      </pre>
    ),
    []
  )


  const columns = React.useMemo(
    () => [
        {
            // Make an expander cell
            Header: () => null, // No header
            id: 'expander', // It needs an ID
            Cell: ({ row }) => (
              // Use Cell to render an expander for each row.
              // We can use the getToggleRowExpandedProps prop-getter
              // to build the expander.
              <span {...row.getToggleRowExpandedProps()}>
                {row.isExpanded ? '👇' : '👉'}
              </span>
            ),
          },
      {
        Header: "ID",
        accessor: "id", // accessor is the "key" in the data
      },
      {
        Header: "Nombre",
        accessor: "proveedor.nombre",
      },
      {
        Header: "Celular",
        accessor: "proveedor.celular",
      },
      {
        Header: "Documento ID",
        accessor: "proveedor.idCliente",
      },
      {
        Header: "Fecha",
        accessor: "fecha",
      }, 
      {
        Header: "Hora",
        accessor: "hora",
      } 
    ],
    []
  );


  return (
    <div>
      <h1>Proovedores</h1>
      <Table columns={columns} data={data} renderRowSubComponent={renderRowSubComponent} />
    </div>
  );
};

export default Proveedores;
