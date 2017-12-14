/*
    FILE:           reducers.js
    PROJECT:        Assignment 2 (MAD9135)
    PROGRAMMER:     Eric Lachapelle (040756723)

    INFO:           Simple To Do List built using React with Redux
 */

import {TOGGLE_STATUS, ADD_TODO_CHANGED, SAVE_NEW_TODO} from "./actions";

export default function mainApp(state, action){

    let newState = Object.assign({}, state);
    let todoList = newState.todoList;

    switch(action.type){
        case TOGGLE_STATUS:

            console.log("in TOGGLE STATUS case..");

            let id = action.statusToToggle;

            // to avoid state mutation
            let newTodo = todoList.map((i) => {

                if (i.id == id) {
                    return Object.assign({}, i, {status: i.status ? 0 : 1});
                } else {
                    return Object.assign({}, i);
                }
            });

            newState.todoList = newTodo;

            break;

        case ADD_TODO_CHANGED:

            console.log("in ADD_TODO_CHANGED..");

            let text = action.newTodoText;
            console.log(text);

            newState.addTodoValue = text;

            break;

        case SAVE_NEW_TODO:

            console.log("in SAVE_NEW_TODO case..");

            let newTodoList = todoList.map((i) => {
                return Object.assign({}, i);
            });

            let newTodoItem = {};
            const lastId =  newTodoList[newTodoList.length-1].id;
            newTodoItem.id = lastId+1;
            newTodoItem.key = lastId+1;
            newTodoItem.text = state.addTodoValue;
            newTodoItem.status = 0;
            newTodoList.push(newTodoItem);

            newState.todoList = newTodoList;

            let textInput = document.getElementById("todoInput");
            textInput.value = "";

            break;

        default:
            return state;
    }

    return newState;
}