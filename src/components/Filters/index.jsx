import React from 'react'
import Button from '../Button'
import { FilterContainer } from './styled'

class Filter extends React.Component {
  render() {
    return (
      <FilterContainer>
        <Button filter={'SHOW_ALL'}>All</Button>
        <Button filter={'SHOW_ACTIVE'}>Active</Button>
        <Button filter={'SHOW_COMPLETE'}>Complete</Button>
      </FilterContainer>
    )
  }
}

export default Filter
