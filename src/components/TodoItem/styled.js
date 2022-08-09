import styled from 'styled-components'

export const TodoItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #bababa;
`

export const TodoItemCheckbox = styled.input`
  width: 20px;
  height: 20px;
  margin: 0 20px 0 0;
`

export const TodoItemText = styled.p`
  flex-grow: 1;
`

export const TodoItemButton = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`
