import {
  getVolantes,
  getVolantesFailed,
  getVolantesSuccess,
  setVolantes,
  setVolantesFailed,
  setVolantesSuccess,
} from "../actions/action";

const functions = {
  
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

  saveVolantes: (request) => {
    return async (dispatch) => {
      dispatch(setVolantes());
      fetch(`http://localhost:8080/volante`, {
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
          dispatch(setVolantesSuccess(json));
        })
        .catch((error) => {
          dispatch(setVolantesFailed("No encontrado"));
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
