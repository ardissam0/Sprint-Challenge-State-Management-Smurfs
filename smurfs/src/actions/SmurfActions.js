import axios from 'axios';
export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const ADD_A_SMURF = 'ADD_A_SMURF';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAIL = 'ADD_FAIL';

//create action creator and action to grab the smurfs
export const fetchSmurf = () => dispatch => {
    dispatch({ type: FETCH_SMURFS, payload: "Grab a smurf" });
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
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

//create action creator and action to add smurfs
  export const addSmurf = smurf => dispatch => {
    dispatch({ type: ADD_A_SMURF, payload: "Add a smurf" });
    console.log(smurf);
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(response => {
        console.log(response.data);
        dispatch({ type: ADD_SUCCESS, payload: response.data });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: ADD_FAIL,
          payload: error
        });
      });
  }; 

