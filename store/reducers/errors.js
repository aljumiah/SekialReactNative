import * as actionTypes from "../actions/Types";

const initialState = {
  errors: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ERRORS:
      console.log("from reducer");
      return {
        ...state,
        errors: Object.keys(action.payload).map(
          key => `${key}: ${action.payload[key]}`
        )
      };

    default:
      return state;
  }
};

export default reducer;
