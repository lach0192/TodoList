/*
    FILE:           Main.js
    PROJECT:        Assignment 2 (MAD9135)
    PROGRAMMER:     Eric Lachapelle (040756723)

    INFO:           Simple To Do List built using React with Redux
 */

import React, {Component} from "react";
import Header from "./Header";
import Todolist from "./Todolist";
import AddNewTodo from "./AddNewTodo";

export default class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Todolist />
                <AddNewTodo addTodoValue={this.props.addTodoValue}/>
            </div>
        );
    }
}