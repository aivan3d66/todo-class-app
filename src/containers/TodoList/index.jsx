import React from 'react'
import TodoItem from '../../components/TodoItem/index.jsx'
import { TodoListEmpty, TodoListWrapper } from './styled'
import { connect } from 'react-redux'
import { filterTodos } from '../../helpers'

class TodoList extends React.Component {
  render() {
    const { todos, completeTodo, deleteTodo, updateTodo } = this.props

    const todosList = todos.map((todo) => {
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          updateTodo={updateTodo}
        />
      )
    })

    return (
      <TodoListWrapper>
        {
          todos.length === 0 ?
            <TodoListEmpty>Empty list</TodoListEmpty> :
            todosList
        }
      </TodoListWrapper>
    )
  }
}

const mapStateToProps = state => ({
  todos: filterTodos(state.appReducer.todos, state.appReducer.filter),
})


export default connect(mapStateToProps)(TodoList)

