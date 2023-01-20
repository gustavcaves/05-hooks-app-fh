import { useEffect, useReducer } from "react"
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer"


const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done: false,
    // },
    // {
    //     id: new Date().getTime() + 1,
    //     description: 'Recolectar la piedra del poder',
    //     done: false,
    // },
]

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const TodoApp = () => {

    const [ todos, dispatch] = useReducer( todoReducer, initialState, init );

    // const { id, description, done } = todos;

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        // console.log({todo})
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatch( action )
    }

    const handleDeleteTodo = (id) => {
        // console.log(id)
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = ( id ) => {
        // console.log( {id} )
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }


  return (
        <>
            <h1>TodoApp (10), <small>pendientes: 2</small></h1>
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
