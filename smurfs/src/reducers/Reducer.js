//import all actions from SmurfActions
import{FETCH_SMURFS} from '../actions/SmurfActions';
import{FETCH_SUCCESS} from '../actions/SmurfActions';
import{FETCH_FAIL} from '../actions/SmurfActions';
import{ADD_A_SMURF} from '../actions/SmurfActions';
import{ADD_SUCCESS} from '../actions/SmurfActions';
import{ADD_FAIL} from '../actions/SmurfActions';

//add state
const initialState = {
    messge: '',
    smurfs: []
  };

  //create reducer to pass into store
  export const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SMURFS:
        return { ...state, message: action.payload };
      case FETCH_SUCCESS:
        return { message: '', smurfs: action.payload };
      case FETCH_FAIL:
        // console.log(action.payload);
        return { ...state, message: action.payload };
      case ADD_A_SMURF:
        return { ...state, message: action.payload };
      case ADD_SUCCESS:
        return { message: "+ Smurf", smurfs: action.payload };
      case ADD_FAIL:
        return { ...state, message: action.payload };
      default:
        return state;
    }
  }; 