export const getInventory = () => ({
  type: "GET_INVENTORY",
});

export const getInventorySuccess = (response) => ({
    type: "GET_INVENTORY_SUCCESS",
    payload: response
})

export const getInventoryFailed = (error) => ({
    type: "GET_INVENTORY_FAILED",
    payload: error
})

const fetchInventory = () => {
    return async (dispatch) => {
        dispatch(getInventory());
        fetch(`http://localhost:8080/inventario`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            })
            .then(response => {
                return response.json()})
            .then(json => {
              dispatch(getInventorySuccess(json));
            })
            .catch(error =>{
                dispatch(getInventoryFailed('No encontrado'));
            });
    }
    
}

export default fetchInventory
