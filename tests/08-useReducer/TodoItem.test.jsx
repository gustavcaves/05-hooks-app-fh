const { render, screen } = require("@testing-library/react");
const { TodoItem } = require("../../src/08-useReducer/TodoItem");


describe('Pruebas en <TodoItem />', () => {

    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('debe de mostrar el Todo Pendiente de completar', () => {

        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock } 
            /> 
        );


        screen.debug()

        const liElement = screen.getByRole('listitem');
        console.log(liElement.innerHTML)

        expect( liElement.className ).toBe('align-self-center')

    });
    
});