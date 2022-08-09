import styled from 'styled-components'
import theme from '../theme'

export const TodoContainer = styled.div`
  width: ${theme.size.max}%;
  margin: 0;
  padding: ${theme.paddings.p15}rem 0;
  background: linear-gradient(45deg, ${theme.colors.lightOrange}, ${theme.colors.extraLightBlue}) no-repeat center 100%;;
`

export const TodoWrapper = styled.div`
  width: ${theme.height.h96}rem;
  margin: 0 auto;
  padding: ${theme.paddings.p5}rem;
  border: ${theme.spaces[2]}px solid transparent;
  border-radius: ${theme.spaces[10]}px;
  background-color: ${theme.colors.extraLightGray};
  box-shadow: ${theme.colors.darkGray};
`

export const TodoTitle = styled.h1`
  margin: ${theme.margins.m5}rem 0;
  text-align: center;
`
