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
  const [volante, setVolante] = useState({ proveedor: {}, productoList: [] });
  const [datosDisabled, setDatosDisabled] = useState(false);

  const dispatch = useDispatch();
  const datos = useSelector((state) => state.inventory);

  useEffect(() => {
    dispatch(apiInventory.fetchInventory());
  }, [dispatch]);

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
  };

  const guardarVolante = () => {
    if (volante.productoList.length !== 0) {
      volante.productoList.map((p) => {
        var a = {};
        a = datos.filter((f) => p.nombreProducto === f.nombreProducto);
        a.length === 0 ? crearNuevo(p) : reemplazarCantidad(...a, p);
        return a;
      });

      dispatch(apiProveedores.saveVolantes(volante));
    } else {
      alert("Agregue minimo un producto");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const nombre = e.target.elements.nombre.value;
    const celular = e.target.elements.celular.value;
    const id = e.target.elements.idProveedor.value;

    if (nombre === "" || celular === "" || id === "") {
      alert("Complete todos los campos");
    } else {
      setVolante({ ...volante, proveedor: { nombre, celular, id } });
      setDatosDisabled(!datosDisabled);
    }
  };

  const submitHandlerProductos = (e) => {
    e.preventDefault();

    const nombreProducto = e.target.elements.nombreProducto.value;
    const cantidad = e.target.elements.cantidad.value;
    const precio = e.target.elements.precio.value;

    if (nombreProducto === "" || cantidad === "" || precio === "") {
      alert("Complete todos los campos");
    } else if (cantidad === "0" || precio === "0") {
      alert("La cantidad ni el precio pueden ser cero");
    } else {
      setVolante({
        ...volante,
        productoList: [
          ...volante.productoList,
          { nombreProducto, cantidad, precio },
        ],
      });
    }
  };

  const deleteItem = (nameItem) => {
    setVolante({
      ...volante,
      productoList: volante.productoList.filter(
        (product) => product.nombreProducto !== nameItem
      ),
    });
  };

  return (
    <div className={datosDisabled ? "h-full" : "h-screen"}>
      <Navbar />
      <div className="flex-column ml-6">
        <h1 className="text-xl mb-4">
          <strong>Generar Volante</strong>
        </h1>
        <form
          onSubmit={submitHandler}
          className="w-full max-w-lg justify-center"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                disabled={datosDisabled}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Identificación
              </label>
              <input
                type="text"
                id="idProveedor"
                disabled={datosDisabled}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Celular
              </label>
              <input
                type="number"
                id="celular"
                disabled={datosDisabled}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <input
                type="submit"
                value="Agregar Productos"
                disabled={datosDisabled}
                className="bg-white hover:bg-gray-200
              text-gray-700 text-sm font-bold py-2 px-4 rounded
        focus:outline-none focus:shadow-outline mr-5 "
              />
              <input
                type="submit"
                value="Editar Datos"
                disabled={!datosDisabled}
                className="bg-white hover:bg-gray-200
              text-gray-700 text-sm font-bold py-2 px-4 rounded
        focus:outline-none focus:shadow-outline "
              />
            </div>
          </div>
        </form>
        <div hidden={!datosDisabled}>
          <form
            onSubmit={submitHandlerProductos}
            className="w-full max-w-lg justify-center"
          >
            <h2 className="text-xl mb-4">Productos:</h2>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <Stack spacing={2} sx={{ width: 300 }}>
                  <Autocomplete
                    sx={{ width: 300 }}
                    id="nombreProducto"
                    freeSolo
                    options={datos.map((option) => option.nombreProducto)}
                    renderInput={(params) => (
                      <TextField {...params} label="Producto" />
                    )}
                  />
                </Stack>
              </div>
              <div className="w-full px-3">
                <input
                  type="number"
                  id="cantidad"
                  placeholder="Cantidad"
                  className="mt-5 appearance-none block w-50 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
                <input
                  type="number"
                  id="precio"
                  placeholder="Precio unitario"
                  className="appearance-none block w-50 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
                <input
                  type="submit"
                  value="Agregar"
                  className="bg-white hover:bg-gray-200
              text-gray-700 text-sm font-bold py-2 px-4 rounded
        focus:outline-none focus:shadow-outline "
                />
              </div>
            </div>
          </form>
          <div>
            <h2 className="text-xl mb-4">Productos Seleccionados</h2>
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Nombre</th>
                  <th className="px-4 py-2">Cantidad</th>
                  <th className="px-4 py-2">Precio Unitario</th>
                </tr>
              </thead>
              <tbody>
                {volante.productoList.map((p) => {
                  return (
                    <tr key={uuid()}>
                      <td className="border border-black px-4 py-2">
                        {p.nombreProducto}
                      </td>
                      <td className="border border-black px-4 py-2">
                        {p.cantidad}
                      </td>
                      <td className="border border-black px-4 py-2">
                        {p.precio}
                      </td>
                      <td>
                        <button
                          className="bg-white hover:bg-gray-200
                         text-gray-700 text-sm font-bold py-2 px-4 rounded
                   focus:outline-none focus:shadow-outline "
                          onClick={() => deleteItem(p.nombreProducto)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <button
          hidden={!datosDisabled}
          className="bg-white hover:bg-gray-200
      text-gray-700 text-sm font-bold py-2 px-4 rounded
focus:outline-none focus:shadow-outline mt-10 mb-6"
          onClick={() => guardarVolante()}
        >
          Guardar Volante
        </button>
      </div>
    </div>
  );
};

export default GVolante;
