

const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];


const todoReducer = ( state = initialState, action = {} ) => {

    if ( action.type === '[TODO] add todo' ){
        return [ ...state, action.payload ];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la priedra del poder',
    done: false
}


const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}


todos = todoReducer( todos, addTodoAction );


console.log({state: todos})

const addTodoAction2 = {
    type: '[TODO] add todo2',
    payload: newTodo,
}

const newTodo2 = {
    id: 2,
    todo: 'Recolectar la priedra del tiempo',
    done: false
}

todos = todoReducer( todos, addTodoAction2 );

console.log({state: todos})


// This code is an example of how to use a reducer function in a React application. It defines an initial state for a to-do list, which is an array of objects with an id, a to-do text, and a done status.

// The todoReducer function takes two parameters, state and action. The state parameter is set to the initialState array by default, and the action parameter is set to an empty object {} by default.

// The todoReducer function checks the type of the action passed to it. If the action type is "[TODO] add todo", the function returns a new state, which is the spread operator ...state concatenated with the action payload. In this case the payload is the newTodo object. If the action type is different from "[TODO] add todo", the function returns the original state without any modification.

// The code also defines a variable todos which is set to the result of the first call to the todoReducer function with no arguments, so it will return the initial state.

// Then, it creates a new to-do object called newTodo with the id, to-do text, and done status. After that, it creates an action object called addTodoAction with the type "[TODO] add todo" and the payload newTodo

// Finally, the todos variable is set to the result of the second call to the todoReducer function with the todos state and the addTodoAction as arguments. This call will return a new state where the newTodo object has been added to the to-do list. The final state is logged to the console.

