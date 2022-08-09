import React, { Component } from 'react'
import { TodoForm, TodoFormButton, TodoFormInput } from './styled'

class TodoInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: '',
    }
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.inputText.trim() !== '') {
      this.props.addTodo(this.state.inputText.trim())
      this.setState((state, props) => ({
        inputText: state.inputText = ''
      }))
    }
  }

  render() {
    return (
      <TodoForm onSubmit={this.handleSubmit.bind(this)}>
        <TodoFormInput
          type='text'
          placeholder='Write something ...'
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}
        />
        <TodoFormButton type='submit'>+</TodoFormButton>
      </TodoForm>
    )
  }

}

export default React.memo(TodoInput)
