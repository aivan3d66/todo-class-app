import styled from 'styled-components'

export const TodoListWrapper = styled.ul`
  height: 200px;
  list-style: none;
  overflow: auto;
  scrollbar-color: #b2b2b2;
  scrollbar-width: thin;
  text-align: left;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    background: #bbbbbb;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-clip: content-box;
    background-color: rgba(100, 149, 237, 100);
    border-radius: 10px;
  }
`

export const TodoListEmpty = styled.li`
  margin: 80px 0;
  color: #bababa;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
`
