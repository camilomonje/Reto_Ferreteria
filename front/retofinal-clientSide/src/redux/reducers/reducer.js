const initialState = {
  loading: false,
  inventory: [],
  proveedores: [],
  facturas: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_INVENTORY":
      return { ...state, loading: true };

    case "GET_INVENTORY_SUCCESS":
      return { ...state, inventory: action.payload, loading: false };

    case "GET_INVENTORY_FAILED":
      return { ...state, inventory: action.payload, loading: false };

    case "GET_FACTURA":
      return { ...state, loading: true };

    case "GET_FACTURA_SUCCESS":
      return { ...state, facturas: action.payload, loading: false };

    case "GET_FACTURA_FAILED":
      return { ...state, facturas: action.payload, loading: false };
    case "GET_PROVEEDORES":
      return { ...state, loading: true };

    case "GET_PROVEEDORES_SUCCESS":
      return { ...state, proveedores: action.payload, loading: false };

    case "GET_PROVEEDORES_FAILED":
      return { ...state, proveedores: action.payload, loading: false };

    default:
      return state;
  }
};

export default reducer;
