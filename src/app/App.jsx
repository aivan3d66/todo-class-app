import React from 'react'
import { connect } from 'react-redux'
import TodoInput from '../components/TodoInput'
import TodoList from '../containers/TodoList'
import { addTodo, completeTodo, deleteTodo, updateTodo } from '../actions'
import { TodoContainer, TodoTitle, TodoWrapper } from './styled'
import Filter from '../components/Filters'

class App extends React.Component {
  render() {
    const { addTodo, deleteTodo, completeTodo, todos, filter, updateTodo } = this.props

    return (
      <TodoContainer>
        <TodoWrapper>
          <TodoTitle>Todo List</TodoTitle>
          <TodoInput addTodo={addTodo} />
          <TodoList
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
            updateTodo={updateTodo}
            todos={todos}
          />
          <Filter filter={filter}/>
        </TodoWrapper>
      </TodoContainer>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.appReducer.todos,
    filter: state.appReducer.filter,
  }
}

export default connect(
  mapStateToProps,
  { addTodo, deleteTodo, completeTodo, updateTodo },
)(App)
