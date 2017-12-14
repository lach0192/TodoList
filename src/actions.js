/*
    FILE:           actions.js
    PROJECT:        Assignment 2 (MAD9135)
    PROGRAMMER:     Eric Lachapelle (040756723)

    INFO:           Simple To Do List built using React with Redux
 */

export const TOGGLE_STATUS = "TOGGLE_STATUS";
export const ADD_TODO_CHANGED = "ADD_TODO_CHANGED";
export const SAVE_NEW_TODO = "SAVE_NEW_TODO";

export function toggleStatus(statusToToggle){
    return {
        type: TOGGLE_STATUS,
        statusToToggle: statusToToggle
    };
}

export function addTodoChanged(newTodoText){
    return {
        type: ADD_TODO_CHANGED,
        newTodoText: newTodoText
    };
}

export function saveNewTodo(){
    return {
        type: SAVE_NEW_TODO
    };
}