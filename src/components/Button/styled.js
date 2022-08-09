import styled from 'styled-components'
import theme from '../../theme'

export const ButtonWrapper = styled.button`
  width: ${theme.size.btn}px;
  padding: ${theme.paddings.p2}rem;
  color: ${theme.colors.white};
  background-color: ${theme.colors.lightBlue};
  border: ${theme.spaces[1]}px solid ${theme.colors.lightBlue};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.blue};
    border: ${theme.spaces[1]}px solid ${theme.colors.blue};
  }
`
