import React, { Component } from 'react'
import { TodoItemButton, TodoItemCheckbox, TodoItemWrapper } from './styled'
import EditableField from '../EditableField'

class TodoItem extends Component {

  handleComplete() {
    this.props.completeTodo(this.props.todo.id)
  }

  handleUpdate(newTitle) {
    this.props.updateTodo(this.props.todo.id, newTitle)
  }

  handleDelete() {
    this.props.deleteTodo(this.props.todo.id)
  }

  render() {
    const { completed, text } = this.props.todo

    return (
      <TodoItemWrapper>
        <TodoItemCheckbox
          type='checkbox'
          checked={completed}
          onChange={this.handleComplete.bind(this)}
        />
        <EditableField
          title={text}
          onChange={this.handleUpdate.bind(this)}
        />
        <TodoItemButton
          onClick={this.handleDelete.bind(this)}
        >
          X
        </TodoItemButton>
      </TodoItemWrapper>
    )
  }

}

export default React.memo(TodoItem)
