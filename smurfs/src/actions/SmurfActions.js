import axios from 'axios';
export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const ADD_A_SMURF = 'ADD_A_SMURF';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAIL = 'ADD_FAIL';

//created action creator and action to grab the smurfs
export const fetchSmurf = () => dispatch => {
    dispatch({ type: FETCH_SMURFS, payload: "Grab a smurf" });
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(response.data)
        dispatch({ type: FETCH_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({
          type: FETCH_FAIL,
          payload: error
        });
      });
  };

