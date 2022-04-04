import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import uuid from "react-uuid";

import apiFacturas from "../redux/api/apiFacturas";
import apiInventory from "../redux/api/apiInventory";

import "../assets/styles/containers/gvolante.scss";

const GFactura = () => {
  const [productos, setProductos] = useState([]);
  const [factura, setFactura] = useState({ cliente: {}, listaProductos: [], nombreVendedor: '', totalPrecio: 0 });
  const [datosDisabled, setDatosDisabled] = useState(false);

  const dispatch = useDispatch();
  const datos = useSelector((state) => state.inventory);

  useEffect(() => {
    dispatch(apiInventory.fetchInventory()).then(
      setProductos(datos.map((item) => item.nombreProducto))
    );
    console.log(productos);
  }, [dispatch]);


  const reemplazarCantidad = (datos, producto) => {
    const inventario = {
      id: datos.id,
      nombreProducto: datos.nombreProducto,
      precioUnitario: producto.precio,
      cantidad: datos.cantidad - parseInt(producto.cantidad),
      minimaCantidad: datos.minimaCantidad,
      maximaCantidad: datos.maximaCantidad,
    };
    dispatch(apiInventory.saveInventory(inventario));

    console.log("datos", datos);
  };

  const guardarFactura = () => {
    factura.listaProductos.map((p) => {
      var a = {};
      a = datos.filter((f) => p.nombreProducto === f.nombreProducto);
      reemplazarCantidad(...a, p);
      return a;
    });

    dispatch(apiFacturas.saveFactura(factura));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const nombre = e.target.elements.nombre.value;
    const celular = e.target.elements.celular.value;
    const id = e.target.elements.idCliente.value;
    const nombreVendedor = e.target.elements.nombreVendedor.value
    setFactura({ ...factura, cliente: { nombre, celular, id }, nombreVendedor });
    setDatosDisabled(!datosDisabled);
  };

  const submitHandlerProductos = (e) => {
    var precio = 0;
    e.preventDefault();
    const nombreProducto = e.target.elements.nombreProducto.value;
    const cantidad = e.target.elements.cantidad.value;

    const precioAntes = datos.filter(
      (item) => item.nombreProducto === nombreProducto
    );
    precioAntes.map((f) => {
      precio = f.precioUnitario;
      return f;
    });
    console.log(precio);
    

    setFactura({
      ...factura,
      listaProductos: [
        ...factura.listaProductos,
        { nombreProducto, cantidad, precio },
      ],
      totalPrecio: factura.totalPrecio + (precio*parseInt(cantidad))
    });
  };

  const deleteItem = (nameItem) => {
    //let nameItem = "Tablas"
    console.log(nameItem);
    console.log(factura.listaProductos);
    console.log(
      factura.listaProductos.filter(
        (product) => product.nombreProducto !== nameItem
      )
    );
    setFactura({
      ...factura,
      listaProductos: factura.listaProductos.filter(
        (product) => product.nombreProducto !== nameItem
      ),
    });
  };

  return (
    <div>
      <h1>Generar Factura</h1>
      <form onSubmit={submitHandler}>
        <div>
          Nombre:
          <input type="text" id="nombre" disabled={datosDisabled} />
        </div>
        <div>
          Identificación:
          <input type="text" id="idCliente" disabled={datosDisabled} />
        </div>
        <div>
          Celular:
          <input type="number" id="celular" disabled={datosDisabled} />
        </div>
        <div>
          Nombre Vendedor:
          <input type="text" id="nombreVendedor" disabled={datosDisabled} />
        </div>
        <div>
          <input
            type="submit"
            value="Agregar Productos"
            disabled={datosDisabled}
          />
          <input type="submit" value="Editar Datos" disabled={!datosDisabled} />
        </div>
      </form>
      <div hidden={!datosDisabled}>
        <form onSubmit={submitHandlerProductos}>
          <h2>Productos:</h2>
          <div className="label-productos">
            <Stack spacing={2} sx={{ width: 300 }}>
              <Autocomplete
                sx={{ width: 500 }}
                onInputChange={(e, inputValue) => console.log(inputValue)}
                disablePortal
                id="nombreProducto"
                options={datos.map((option) => option.nombreProducto)}
                renderInput={(params) => (
                  <TextField {...params} label="Producto" />
                )}
              />
            </Stack>

            <input
              type="number"
              id="cantidad"
              placeholder="Cantidad"
              className="input-cantidad"
            />

            <h3>{}</h3>

            <input type="submit" value="Agregar" className="input-submit" />
          </div>
        </form>
        <div>
          <h2>Productos Seleccionados</h2>
          <ul>
            {factura.listaProductos.map((p) => {
              return (
                <li key={uuid()}>
                  <h3>
                    {p.nombreProducto}
                    {"-----------"}
                    {p.cantidad}
                    {"---------"}
                    {p.precio}
                  </h3>
                  <button onClick={() => deleteItem(p.nombreProducto)}>
                    Eliminar
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {<button onClick={() => guardarFactura()}>Guardar factura</button>}
    </div>
  );
};

export default GFactura;
