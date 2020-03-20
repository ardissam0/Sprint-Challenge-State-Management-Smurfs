import React, { useEffect } from "react";
import {connect} from 'react-redux';
import "./App.css";
import {fetchSmurf} from '../actions/SmurfActions';
import SmurfForm from './SmurfForm';
import Smurf from './Smurf';
//uses fetchSmurf to grab the smurfs
const App= ({fetchSmurf}) => {

  useEffect(() => {
      fetchSmurf();
    }, [fetchSmurf]);

    //renders components
    return (
      <div className="App">
        <h1>SMURFS</h1>
        <Smurf />
        <SmurfForm />
      </div>
    );
};
//takes properties from state to map to the props of the components
const mapStateToProps = state => {
  return {
    message: state.message,
    smurfs: state.smurfs
  };
}
//passes mapStateToProps into connect function
//tells which state to pass to components
export default connect(
  mapStateToProps,
  { fetchSmurf }
)(App);