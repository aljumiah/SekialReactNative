import * as actionTypes from "../actions/Types";

const initialState = {
  devices: [],
  loading: true
};

const devicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DEVICES:
      return {
        ...state,
        devices: action.payload,
        loading: false
      };
    case actionTypes.DEVICE_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default devicesReducer;
