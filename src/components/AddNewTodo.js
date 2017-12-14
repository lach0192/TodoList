/*
    FILE:           AddNewTodo.js
    PROJECT:        Assignment 2 (MAD9135)
    PROGRAMMER:     Eric Lachapelle (040756723)

    INFO:           Simple To Do List built using React with Redux
 */

import React, { Component } from "react";
import * as counterActions from "../actions";
import {connect} from "react-redux";

class AddNewTodo extends Component {
    render() {
        return (
            <div>
                <input type="text" id="todoInput" value={this.props.addTodoValue} onChange={this.props.addTodoChanged} placeholder="Add New Todo" />
                <button className="add" onClick={this.props.saveNewTodo}>➕</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        addTodoChanged: state.addTodoChanged,
        saveNewTodo: state.saveNewTodo,
        addTodoValue: state.addTodoValue
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodoChanged: (e) => dispatch(counterActions.addTodoChanged(e.target.value)),
        saveNewTodo: () => dispatch(counterActions.saveNewTodo())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewTodo);