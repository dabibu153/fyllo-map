const initialState = {
  detailedData: "nil",
  plotLocation:"nil",
  
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_PLOT":
      return { ...state, plotLocation: action.data };
    
    case "SET_DETAILED_DATA":
      return { ...state, detailedData: action.data };
    default:
      return state;
  }
}

export default rootReducer;
