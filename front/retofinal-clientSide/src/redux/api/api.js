import {
  getInventory,
  getInventoryFailed,
  getInventorySuccess,
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
      dispatch(getInventory());
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
          dispatch(getInventorySuccess(json));
        })
        .catch((error) => {
          dispatch(getInventoryFailed("No encontrado"));
        });
    };
  },

  fetchFacturas: () => {
    return async (dispatch) => {
      dispatch(getInventory());
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
          dispatch(getInventorySuccess(json));
        })
        .catch((error) => {
          dispatch(getInventoryFailed("No encontrado"));
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
