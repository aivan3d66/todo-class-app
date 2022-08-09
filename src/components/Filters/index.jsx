import React from 'react'
import Button from '../Button'
import { FilterContainer } from './styled'
import { typeFilter } from '../../constants'

class Filter extends React.Component {
  render() {
    return (
      <FilterContainer>
        <Button filter={typeFilter.SHOW_ALL}>All</Button>
        <Button filter={typeFilter.SHOW_ACTIVE}>Active</Button>
        <Button filter={typeFilter.SHOW_COMPLETE}>Complete</Button>
      </FilterContainer>
    )
  }
}

export default React.memo(Filter)
