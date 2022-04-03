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

export const setInventory = () => ({
  type: "SET_INVENTORY",
});

export const setInventorySuccess = (response) => ({
    type: "SET_INVENTORY_SUCCESS",
    payload: response
})

export const setInventoryFailed = (error) => ({
    type: "SET_INVENTORY_FAILED",
    payload: error
})

export const getProducto = () => ({
  type: "GET_PRODUCTO",
});

export const getProductoSuccess = (response) => ({
    type: "GET_PRODUCTO_SUCCESS",
    payload: response
})

export const getProductoFailed = (error) => ({
    type: "GET_PRODUCTO_FAILED",
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

export const setFactura = () => ({
  type: "SET_FACTURA",
});

export const setFacturaSuccess = (response) => ({
    type: "SET_FACTURA_SUCCESS",
    payload: response
})

export const setFacturaFailed = (error) => ({
    type: "SET_FACTURA_FAILED",
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



