import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions/SmurfActions";
import "./App.css";

//create form for adding smurfs
const SmurfForm = props => {
  const [smurf, setsmurf] = useState({ name: '', age: '', height: '' });

  const changeHandler = e => {
    setsmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  //create a submitHandler
  const submitHandler = e => {
    e.preventDefault();
    props.addSmurf(smurf);
    setsmurf({ name: '', age: '', height: '' });
  };

  //return name, age, and height form fields
  //and submit button to add to the list
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name"> Name: </label>
          <input
            onChange={changeHandler}
            name="name"
            type="text"
            placeholder="Name"
            value={smurf.name}
          />
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input
            onChange={changeHandler}
            name="age"
            type="text"
            placeholder="Age"
            value={smurf.age}
          />
        </div>
        <div>
          <label htmlFor="height">Height: </label>
          <input
            onChange={changeHandler}
            name="height"
            type="text"
            placeholder="Height"
            value={smurf.height}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

//takes properties from state to map to the props of the components
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};
//passes mapStateToProps into connect function
//tells which state to pass to components
export default connect(
  mapStateToProps,
  { addSmurf }
)(SmurfForm); 