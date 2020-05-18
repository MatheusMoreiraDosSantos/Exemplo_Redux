import React from "react";
import { connect } from "react-redux";

const Counter = (props) => <h2>você tem {props.todos.length} todos. </h2>;

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(Counter);
