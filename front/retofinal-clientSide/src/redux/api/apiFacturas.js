import {
  getFactura,
  getFacturaFailed,
  getFacturaSuccess,
  setFactura,
  setFacturaFailed,
  setFacturaSuccess,
} from "../actions/action";

const functions = {
  
  fetchFacturas: () => {
    return async (dispatch) => {
      dispatch(getFactura());
      fetch(`http://localhost:8080/factura`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          dispatch(getFacturaSuccess(json));
        })
        .catch((error) => {
          dispatch(getFacturaFailed("No encontrado"));
        });
    };
  },
  saveFactura: (request) => {
    return async (dispatch) => {
      dispatch(setFactura());
      fetch(`http://localhost:8080/factura`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        body: JSON.stringify(request),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          dispatch(setFacturaSuccess(json));
        })
        .catch((error) => {
          dispatch(setFacturaFailed("No encontrado"));
        });
    };
  },
};

export default functions;

// export default async function fetchInventory() {
//   const response = await fetch(`http://localhost:8080/inventario`);
//   const json = await response.json();
//   return json;
// }
