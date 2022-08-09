import styled from 'styled-components'
import theme from '../../theme'

export const TodoForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: ${theme.size.max}%;
  margin: ${theme.margins.m5}rem 0;
  text-align: center;
`

export const TodoFormInput = styled.input`
  width: ${theme.size.max}%;
  padding: ${theme.paddings.p2}rem;
  border: ${theme.spaces[1]}px solid ${theme.colors.blue};
  transition: 0.3s;

  &:hover {
    border: ${theme.spaces[1]}px solid ${theme.colors.lightBlue};
  }
`

export const TodoFormButton = styled.button`
  width: 60px;
  padding: ${theme.paddings.p2}rem;
  font-size: ${theme.textStyle.base.fontSize}rem;
  color: ${theme.colors.white};
  background-color: ${theme.colors.lightBlue};
  border: ${theme.spaces[1]}px solid ${theme.colors.lightBlue};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.blue};
    border: ${theme.spaces[1]}px solid ${theme.colors.lightBlue};
  }
`
