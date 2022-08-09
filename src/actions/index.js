import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, FILTER_TODO, UPDATE_TODO } from '../constants/actions'

export const addTodo = text => ({ type: ADD_TODO, payload: { text } })
export const deleteTodo = id => ({ type: DELETE_TODO, payload: { id } })
export const updateTodo = (id, text) => ({ type: UPDATE_TODO, payload: { id, text } })
export const completeTodo = id => ({ type: COMPLETE_TODO, payload: { id } })
export const filterTodo = filter => ({ type: FILTER_TODO, payload: { filter } })
