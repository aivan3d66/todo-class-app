import React, { Component } from 'react'
import { TodoItemButton, TodoItemCheckbox, TodoItemText, TodoItemWrapper } from './styled'

class TodoItem extends Component {

  handleComplete() {
    this.props.completeTodo(this.props.todo.id)
  }

  handleDelete() {
    this.props.deleteTodo(this.props.todo.id)
  }

  render() {
    const { todo } = this.props

    return (
      <TodoItemWrapper>
        <TodoItemCheckbox
          type='checkbox'
          checked={todo.completed}
          onChange={this.handleComplete.bind(this)}
        />
        <TodoItemText>{todo.text}</TodoItemText>
        <TodoItemButton onClick={this.handleDelete.bind(this)}>X</TodoItemButton>
      </TodoItemWrapper>
    )
  }

}

export default TodoItem
