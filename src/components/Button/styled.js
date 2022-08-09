import styled from 'styled-components'

export const ButtonWrapper = styled.button`
  width: 140px;
  padding: 10px;
  color: white;
  background-color: rgba(100, 149, 237, 100);
  border: 1px solid rgba(100, 149, 237, 100);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #ffffff;
    background-color: rgba(100, 149, 237, 0.5);
    border: 1px solid rgba(100, 149, 237, 0.5);
  }
`
