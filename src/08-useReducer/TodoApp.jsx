import { useTodos } from "../hooks/useTodos";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";


export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodos()

  return (
        <>
            <h1>TodoApp ({ todosCount }), <small>Pendientes: { pendingTodosCount }</small></h1>
            <hr/>

            <div className="row">
                <div className="col-7">

                    {/* { TodoList } */}
                    <TodoList 
                        todos={ todos } 
                        onDeleteTodo={ handleDeleteTodo } 
                        onToggleTodo={ handleToggleTodo }
                        />
                    {/* { Fin de TodoList } */}

                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                        {/* TodoAdd onNewTodo( todo ) */}
                        {/* { id: new Date()..., description: '', done: false } */}
                        <TodoAdd 
                            onNewTodo={ handleNewTodo } 
                            />
                         {/* Fin TodoAdd */}
                </div>
            </div>

        </>
  )
}
