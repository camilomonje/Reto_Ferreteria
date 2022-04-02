import {
  getInventory,
  getInventoryFailed,
  getInventorySuccess,
  getProducto,
  getProductoFailed,
  getProductoSuccess,
  setInventory,
  setInventoryFailed,
  setInventorySuccess,
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

  getProducto: (nombreProducto) => {
    return async (dispatch) => {
      dispatch(getProducto());
      fetch(`http://localhost:8080/inventario/${nombreProducto}/findByName`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          dispatch(getProductoSuccess(json));
          
        })
        .catch((error) => {
          dispatch(getProductoFailed("No encontrado"));

        });
    };
  },

  saveInventory: (request) => {
    return async (dispatch) => {
      dispatch(setInventory());
      fetch(`http://localhost:8080/inventario`, {
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
          dispatch(setInventorySuccess(json));
        })
        .catch((error) => {
          dispatch(setInventoryFailed("No encontrado"));
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
