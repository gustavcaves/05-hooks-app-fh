
export const TodoList = ( { todos } ) => {

    console.log(todos)
  
    return (
    <ul className="list-group">
        {
            todos.map( todo => (
                // TodoItem ...
                <li key={ todo.id } className="list-group-item d-flex justify-content-between">
                    <span className="align-self-center">{ todo.description}</span>
                    <button className="btn btn-danger">
                        Borrar
                    </button>
                </li>
            ))
        }
    </ul>
  )
}
