import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import uuid from "react-uuid";

import apiProveedores from "../redux/api/apiProveedores";
import apiInventory from "../redux/api/apiInventory";

import "../assets/styles/containers/gvolante.scss";
import Navbar from "../components/Navigation/Navbar";

const GVolante = () => {
  const [productos, setProductos] = useState([]);
  const [volante, setVolante] = useState({ proveedor: {}, productoList: [] });
  const [datosDisabled, setDatosDisabled] = useState(false);

  const dispatch = useDispatch();
  const datos = useSelector((state) => state.inventory);

  useEffect(() => {
    dispatch(apiInventory.fetchInventory()).then(
      setProductos(datos.map((item) => item.nombreProducto))
    );
    console.log(productos)
  }, []);

  const crearNuevo = (producto) => {
    //post
    const inventario = {
      nombreProducto: producto.nombreProducto,
      precioUnitario: producto.precio,
      cantidad: producto.cantidad,
      minimaCantidad: 0,
      maximaCantidad: 100,
    };
    dispatch(apiInventory.saveInventory(inventario));

    console.log("producto", producto);
  };

  const reemplazarCantidad = (datos, producto) => {
    const inventario = {
      id: datos.id,
      nombreProducto: datos.nombreProducto,
      precioUnitario: producto.precio,
      cantidad: datos.cantidad + parseInt(producto.cantidad),
      minimaCantidad: datos.minimaCantidad,
      maximaCantidad: datos.maximaCantidad,
    };
    dispatch(apiInventory.saveInventory(inventario));

    console.log("datos", datos);
  };

  const guardarVolante = () => {
    volante.productoList.map((p) => {
      var a = {};
      a = datos.filter((f) => p.nombreProducto === f.nombreProducto);
      console.log(a);
      a.length === 0 ? crearNuevo(p) : reemplazarCantidad(...a, p);
      return a;
    });

    dispatch(apiProveedores.saveVolantes(volante));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const nombre = e.target.elements.nombre.value;
    const celular = e.target.elements.celular.value;
    const id = e.target.elements.idProveedor.value;
    setVolante({ ...volante, proveedor: { nombre, celular, id } });
    setDatosDisabled(!datosDisabled);
  };

  const submitHandlerProductos = (e) => {
    e.preventDefault();

    const nombreProducto = e.target.elements.nombreProducto.value;
    const cantidad = e.target.elements.cantidad.value;
    const precio = e.target.elements.precio.value;

    setVolante({
      ...volante,
      productoList: [
        ...volante.productoList,
        { nombreProducto, cantidad, precio },
      ],
    });
  };

  const deleteItem = (nameItem) => {
    //let nameItem = "Tablas"
    console.log(nameItem);
    console.log(volante.productoList);
    console.log(
      volante.productoList.filter(
        (product) => product.nombreProducto !== nameItem
      )
    );
    setVolante({
      ...volante,
      productoList: volante.productoList.filter(
        (product) => product.nombreProducto !== nameItem
      ),
    });
  };

  return (
    <div>
      <Navbar />
      <h1>Generar Volante</h1>
      <form onSubmit={submitHandler}>
        <div>
          Nombre:
          <input type="text" id="nombre" disabled={datosDisabled} />
        </div>
        <div>
          Identificación:
          <input type="text" id="idProveedor" disabled={datosDisabled} />
        </div>
        <div>
          Celular:
          <input type="number" id="celular" disabled={datosDisabled} />
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
              sx={{ width: 300 }}
              onChange={(value) => console.log(value)}
              // onInputChange={(e,inputValue) => }
              id="nombreProducto"
              freeSolo
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
            <input
              type="number"
              id="precio"
              placeholder="Precio unitario"
              className="input-precio"
            />
            <input type="submit" value="Agregar" className="input-submit" />
          </div>
        </form>
        <div>
          <h2>Productos Seleccionados</h2>
          <ul>
            {volante.productoList.map((p) => {
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
      {<button onClick={() => guardarVolante()}>Guardar Volante</button>}
    </div>
  );
};

export default GVolante;
