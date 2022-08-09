export const filterTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETE':
      return todos.filter(todo => todo.completed === true)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => todo.completed === false)
    default:
      return todos
  }
}
