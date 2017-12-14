/*
    FILE:           Todolist.js
    PROJECT:        Assignment 2 (MAD9135)
    PROGRAMMER:     Eric Lachapelle (040756723)

    INFO:           Simple To Do List built using React with Redux
 */

import React, { Component } from "react";
import Todo from "./Todo";
import {connect} from "react-redux";

class Todolist extends Component {
    render() {
        const todos = this.props.todos.map((item) => {
            return (
                <Todo {...item} />
            );
        });
        return (
            <div>
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        todos: state.todoList
    };
};

export default connect(mapStateToProps)(Todolist);