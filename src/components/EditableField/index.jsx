import React, { Component } from 'react'
import { EditableInput, EditableSpan, EditableSpanWrapper } from './styled'
import PropTypes from 'prop-types'

class EditableField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
      newTitle: '',
    }

    this.activateEditMode = this.activateEditMode.bind(this)
    this.activateViewMode = this.activateViewMode.bind(this)
    this.onChangeTitleHandler = this.onChangeTitleHandler.bind(this)
  }

  activateEditMode() {
    this.setState({ editMode: true })
    this.setState({ newTitle: this.props.title })
  }

  activateViewMode() {
    this.setState({ editMode: false })
    this.props.onChange(this.state.newTitle)
  }

  onChangeTitleHandler(e) {
    this.setState({ newTitle: e.currentTarget.value })
  }

  render() {
    const { title } = this.props
    const { editMode, newTitle } = this.state

    return (
      <EditableSpanWrapper>
        {
          editMode
            ?
            <EditableInput
              onChange={this.onChangeTitleHandler}
              value={newTitle}
              onBlur={this.activateViewMode}
              autoFocus
            />

            : <EditableSpan onDoubleClick={this.activateEditMode}>{title}</EditableSpan>

        }
      </EditableSpanWrapper>
    )
  }

}

export default React.memo(EditableField)

EditableField.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
