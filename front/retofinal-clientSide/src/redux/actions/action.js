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

export const getFactura = () => ({
  type: "GET_FACTURA",
});

export const getFacturaSuccess = (response) => ({
    type: "GET_FACTURA_SUCCESS",
    payload: response
})

export const getFacturaFailed = (error) => ({
    type: "GET_FACTURA_FAILED",
    payload: error
})

export const getVolantes = () => ({
  type: "GET_PROVEEDORES",
});

export const getVolantesSuccess = (response) => ({
    type: "GET_PROVEEDORES_SUCCESS",
    payload: response
})

export const getVolantesFailed = (error) => ({
    type: "GET_PROVEEDORES_FAILED",
    payload: error
})

export const setVolantes = () => ({
  type: "SET_PROVEEDORES",
});

export const setVolantesSuccess = (response) => ({
    type: "SET_PROVEEDORES_SUCCESS",
    payload: response
})

export const setVolantesFailed = (error) => ({
    type: "SET_PROVEEDORES_FAILED",
    payload: error
})

