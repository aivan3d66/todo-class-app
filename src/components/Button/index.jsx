import React from 'react'

import { ButtonWrapper } from './styled'
import { filterTodo } from '../../actions'
import { connect } from 'react-redux'

class Button extends React.Component {
  render() {
    const { onClick, active, children } = this.props

    return (
      <ButtonWrapper
        onClick={onClick}
        disabled={active}
      >
        {children}
      </ButtonWrapper>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(filterTodo(ownProps.filter))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)

