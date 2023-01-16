import { useReducer } from "react"
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer"


const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false,
    },
    {
        id: new Date().getTime() + 1,
        description: 'Recolectar la piedra del poder',
        done: false,
    },
]

export const TodoApp = () => {

    const [ todos, dispatch] = useReducer( todoReducer, initialState );

    // const { id, description, done } = todos;

    const handleNewTodo = ( todo ) => {
        console.log( todo )
    }

  return (
        <>
            <h1>TodoApp (10), <small>pendientes: 2</small></h1>
            <hr/>

            <div className="row">
                <div className="col-7">

                    {/* { TodoList } */}
                    <TodoList />
                    {/* { Fin de TodoList } */}

                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                        {/* TodoAdd onNewTodo( todo ) */}
                        {/* { id: new Date()..., description: '', done: false } */}
                        <TodoAdd todos={ todos } />
                         {/* Fin TodoAdd */}
                </div>
            </div>

        </>
  )
}
