import styled from 'styled-components'
import theme from '../../theme'

export const TodoItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${theme.size.max}%;
  padding: ${theme.paddings.p2}rem;
  border-bottom: ${theme.spaces[1]}px solid ${theme.colors.lightGray};
`

export const TodoItemCheckbox = styled.input`
  width: ${theme.size.todo}px;
  height: ${theme.size.todo}px;
  margin: 0 ${theme.margins.m5}rem 0 0;
`

export const TodoItemButton = styled.button`
  width: ${theme.size.todo}px;
  height: ${theme.size.todo}px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`
