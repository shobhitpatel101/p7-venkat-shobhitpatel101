import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {createStore} from "redux";
import {Provider, connect} from "react-redux";

const initState = {
  isLightOn: true
}

const flipLight = () => ({
  type: "FLIP_LIGHT"
});

function roomReducer(state = initState, action) {
  switch(action.type){
    case "FLIP_LIGHT":
        return {isLightOn: !state.isLightOn}
    default:
        return state;
  }}

const store = createStore(roomReducer);

class Room extends React.Component {
  render(){
    const lightedness = this.props.isLightOn ? "lit" : "dark";
    return(
      <>
        <div className = {`room ${lightedness}`}>
            the room is {lightedness}
            <br />
            <button onClick={this.props.flipLight}>flip</button> 
        </div>
      </>
    );}}

const ConnectedRoom = connect(
  state => ({ isLightOn: state.isLightOn}),
  {flipLight}
)(Room);

ReactDOM.render(
<Provider store={store}>
  <ConnectedRoom />
</Provider>,
document.getElementById("root"));
