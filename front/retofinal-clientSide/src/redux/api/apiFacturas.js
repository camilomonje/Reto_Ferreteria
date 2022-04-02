import {
  getFactura,
  getFacturaFailed,
  getFacturaSuccess,
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
};

export default functions;

// export default async function fetchInventory() {
//   const response = await fetch(`http://localhost:8080/inventario`);
//   const json = await response.json();
//   return json;
// }
