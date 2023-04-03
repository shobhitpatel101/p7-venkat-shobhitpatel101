import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {createStore} from "redux";
import {Provider, connect} from "react-redux";

const initState = {
  steps: 0
};

const addSteps = () => ({
  type: "ADD_STEPS"
});

const resetSteps = () => ({
  type: "RESET_STEPS"
});

function roomReducer(state = initState, action) {
  switch(action.type){
    case "ADD_STEPS":
        return {steps: state.steps + 1}
    case "RESET_STEPS":
        return {steps: 0}
    default:
        return state;
  }}

const store = createStore(roomReducer);

class StepCounter extends React.Component {
  render(){
    const stepsCount = this.props.stepsCount;
    return(
      <>
        <div className = {`room lit`}>
            You've walked {stepsCount} steps today!
            <br />
            <button onClick={this.props.addSteps}>Add Step</button> 
            <button onClick={this.props.resetSteps}>Reset Steps</button> 
        </div>
      </>
    );}}

const ConnectedStepCounter = connect(
  state => ({ stepsCount: state.steps}),
  {addSteps, resetSteps}
)(StepCounter);

ReactDOM.render(
<Provider store={store}>
  <ConnectedStepCounter />
</Provider>,
document.getElementById("root"));
