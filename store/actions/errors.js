import * as actionTypes from "./Types";

export const setErrors = errors => ({
  type: actionTypes.SET_ERRORS,
  payload: errors
});

export const resetError = () => {
  return async dispatch => {
    dispatch({
      type: actionTypes.SET_ERRORS,
      payload: []
    });
  };
};
