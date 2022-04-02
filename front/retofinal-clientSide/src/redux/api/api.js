import {
  getFactura,
  getFacturaFailed,
  getFacturaSuccess,
  getInventory,
  getInventoryFailed,
  getInventorySuccess,
  getVolantes,
  getVolantesFailed,
  getVolantesSuccess,
} from "../actions/action";

const functions = {
  fetchInventory: () => {
    return async (dispatch) => {
      dispatch(getInventory());
      fetch(`http://localhost:8080/inventario`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          dispatch(getInventorySuccess(json));
        })
        .catch((error) => {
          dispatch(getInventoryFailed("No encontrado"));
        });
    };
  },

  fetchVolantes: () => {
    return async (dispatch) => {
      dispatch(getVolantes());
      fetch(`http://localhost:8080/volante`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          dispatch(getVolantesSuccess(json));
        })
        .catch((error) => {
          dispatch(getVolantesFailed("No encontrado"));
        });
    };
  },

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
