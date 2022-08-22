export default function ToDo(props) {
  const { todo, onChange, onDelete } = props;
  return (
    <div className="toDoRow" key={todo.id}>
      <input className="toDoCheckbox" name="completed" type="checkbox" checked={todo.completed} value={todo.completed} onChange={(e) => onChange(e, todo.id)}></input>
      <input className="todoInput" autoComplete='off' name="name" type="text" value={todo.name} onChange={(e) => onChange(e, todo.id)}></input>
      <button className="deleteBtn" onClick={() => onDelete(todo.id)}><img src="/material-symbols_delete-outline-sharp.svg" width="24px" height="24px" /></button>
    </div>
  )
}