import * as actionTypes from "../actions/Types";

const initialState = {
  devices: [],
  loading: true,
  newOwner: ""
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
    case actionTypes.TRANSFARE_OWNER:
      return {
        ...state,
        newOwner: action.payload
      };
    default:
      return state;
  }
};

export default devicesReducer;
