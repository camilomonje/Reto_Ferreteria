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

