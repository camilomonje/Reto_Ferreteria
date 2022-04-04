import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";

import apiFacturas from "../redux/api/apiFacturas";
import apiInventory from "../redux/api/apiInventory";

import "../assets/styles/containers/gvolante.scss";
import Navbar from "../components/Navigation/Navbar";

const GFactura = () => {
  const [factura, setFactura] = useState({
    cliente: {},
    listaProductos: [],
    nombreVendedor: "",
    totalPrecio: 0,
  });
  const [datosDisabled, setDatosDisabled] = useState(false);

  const dispatch = useDispatch();
  const datos = useSelector((state) => state.inventory);

  useEffect(() => {
    dispatch(apiInventory.fetchInventory());
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
  };

  const guardarFactura = () => {
    if (factura.listaProductos.length !== 0) {
      factura.listaProductos.map((p) => {
        var a = {};
        a = datos.filter((f) => p.nombreProducto === f.nombreProducto);
        reemplazarCantidad(...a, p);
        return a;
      });

      dispatch(apiFacturas.saveFactura(factura));
    } else {
      alert("Agregue minimo 1 producto");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const nombre = e.target.elements.nombre.value;
    const celular = e.target.elements.celular.value;
    const id = e.target.elements.idCliente.value;
    const nombreVendedor = e.target.elements.nombreVendedor.value;

    if (nombre === "" || celular === "" || id === "" || nombreVendedor === "") {
      alert("Complete todos los campos");
    } else {
      setFactura({
        ...factura,
        cliente: { nombre, celular, id },
        nombreVendedor,
      });
      setDatosDisabled(!datosDisabled);
    }
  };

  const submitHandlerProductos = (e) => {
    var precio = 0;
    e.preventDefault();
    const nombreProducto = e.target.elements.nombreProducto.value;
    const cantidad = e.target.elements.cantidad.value;

    if (cantidad === "" || cantidad === "0") {
      alert("La cantidad no puede estar vacia o ser cero");
    } else {
      const precioAntes = datos.filter(
        (item) => item.nombreProducto === nombreProducto
      );
      precioAntes.map((f) => {
        precio = f.precioUnitario;
        return f;
      });
      setFactura({
        ...factura,
        listaProductos: [
          ...factura.listaProductos,
          { nombreProducto, cantidad, precio },
        ],
        totalPrecio: factura.totalPrecio + precio * parseInt(cantidad),
      });
    }
  };

  const deleteItem = (producto) => {
    setFactura({
      ...factura,
      listaProductos: factura.listaProductos.filter(
        (product) => product.nombreProducto !== producto.nombreProducto
      ),
      totalPrecio: factura.totalPrecio - producto.precio * producto.cantidad,
    });
  };

  return (
    <div className={datosDisabled ? "h-full" : "h-screen"}>
      <Navbar />
      <div className="flex-column ml-6">
        <h1 className="text-xl mb-4">
          <strong>Generar Factura</strong>
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
                id="idCliente"
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
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Nombre Vendedor:
              </label>
              <input
                type="text"
                id="nombreVendedor"
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
                <select
                  name="nombreProducto"
                  id="nombreProducto"
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  {datos.map((option) => {
                    return (
                      <option key={uuid()}>{option.nombreProducto}</option>
                    );
                  })}
                </select>
              </div>
              <div className="flex-row  mb-6 mt-6">
                <div className="w-full px-3">
                  <input
                    type="number"
                    id="cantidad"
                    placeholder="Cantidad"
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
                {factura.listaProductos.map((p) => {
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
                          onClick={() => deleteItem(p)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <h2>Precio Total: {factura.totalPrecio}</h2>
          </div>
        </div>
        <button
          hidden={!datosDisabled}
          className="bg-white hover:bg-gray-200
        text-gray-700 text-sm font-bold py-2 px-4 rounded
  focus:outline-none focus:shadow-outline mt-10 mb-6"
          onClick={() => guardarFactura()}
        >
          Guardar factura
        </button>
      </div>
    </div>
  );
};

export default GFactura;
