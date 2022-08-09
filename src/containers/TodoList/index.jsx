import React from 'react'
import TodoItem from '../../components/TodoItem/index.jsx'
import { TodoListEmpty, TodoListWrapper } from './styled'
import { connect } from 'react-redux'

class TodoList extends React.Component {
  render() {
    const { todos, completeTodo, deleteTodo } = this.props

    const todosList = todos.map((todo) => {
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />
      )
    })

    return (
      <TodoListWrapper>
        {
          todos.length === 0 ? <TodoListEmpty>Empty list</TodoListEmpty> : todosList
        }
      </TodoListWrapper>
    )
  }
}

const filterTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETE':
      return todos.filter(todo => todo.completed === true)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => todo.completed === false)
    default:
      return todos
  }
}

const mapStateToProps = state => ({
  todos: filterTodos(state.appReducer.todos, state.appReducer.filter),
})


export default connect(mapStateToProps)(TodoList)

