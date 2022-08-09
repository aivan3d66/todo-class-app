import styled from 'styled-components'
import theme from '../../theme'

export const TodoListWrapper = styled.ul`
  height: ${theme.height.h32}rem;
  list-style: none;
  overflow: auto;
  scrollbar-color: ${theme.colors.extraLightGray};
  scrollbar-width: thin;
  text-align: left;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    background: ${theme.colors.secondaryLight};
    border-radius: ${theme.spaces[10]}px;
  }

  &::-webkit-scrollbar-thumb {
    background-clip: content-box;
    background-color: rgba(100, 149, 237, 100);
    border-radius: ${theme.spaces[10]}px;
  }
`

export const TodoListEmpty = styled.li`
  margin: ${theme.margins.m20}rem 0;
  color: ${theme.colors.secondaryLight};
  font-size: ${theme.textStyle.base.fontSize}rem;
  text-transform: uppercase;
  text-align: center;
`
