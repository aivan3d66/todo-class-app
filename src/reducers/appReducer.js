import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, FILTER_TODO, UPDATE_TODO } from '../constants/actions'

const initialState = {
  todos: [],
  filter: 'SHOW_ALL'
}

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: payload.text,
            completed: false,
            id: payload.id,
          },
        ],
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload.id)
      }
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return todo.id === payload.id ? {...todo, text: payload.text } : todo
        })
      }
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return todo.id === payload.id ? {...todo, completed: !todo.completed } : todo
        })
      }
    case FILTER_TODO:
      return {
        ...state,
        filter: payload.filter
      }
    default:
      return state
  }
}
