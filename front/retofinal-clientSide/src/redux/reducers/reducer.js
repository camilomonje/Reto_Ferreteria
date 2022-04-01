const initialState = {
  loading: false,
  inventory: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_INVENTORY":
      return { ...state, loading: true };

      case "GET_INVENTORY_SUCCESS":
          return {...state, inventory : action.payload, loading: false}
      


    default:
      return state;
  }
};

export default reducer;
