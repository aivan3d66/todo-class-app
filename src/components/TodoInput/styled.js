import styled from 'styled-components'

export const TodoForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
  text-align: center;
`

export const TodoFormInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid rgba(100, 149, 237, 0.5);
  transition: 0.3s;

  &:hover {
    border: 1px solid rgba(100, 149, 237, 100);
  }
`

export const TodoFormButton = styled.button`
  width: 60px;
  padding: 10px;
  font-size: 20px;
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
