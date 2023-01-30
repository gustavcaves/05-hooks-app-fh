const { render, screen, fireEvent } = require('@testing-library/react');
const { MultipleCustomHooks } = require('../../src/03-examples/MultipleCustomHooks');
const { useCounter } = require('../../src/hooks/useCounter');
const { useFetch } = require('../../src/hooks/useFetch');

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')

describe('Pruebas en <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn()

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })

    beforeEach( () => {
        jest.clearAllMocks();
    })
    

    test('debe de mostrar el componente por defecto', () => {
        
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })

        render( <MultipleCustomHooks />);

        expect( screen.getByText('Loading...'));
        expect( screen.getByText('BreakingBad Quotes'));

        const nextButton = screen.getByRole('button', { name: 'Next Quote'})
        // console.log(nextButton.disabled) => disable tag en return jsx del componente en el button
        expect( nextButton.disabled ).toBeTruthy()
        // screen.debug()

    });

    test('debe de mostrar un Quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Gustav', quote: 'Hola Gustav'}],
            isLoading: false,
            hasError: null
        })
        
        render( <MultipleCustomHooks />);
        // screen.debug()

        expect( screen.getByText('Hola Gustav')).toBeTruthy();
        expect( screen.getByText('Gustav')).toBeTruthy();

        const netxButton = screen.getByRole('button', { name: 'Next Quote' });
        expect(netxButton.disabled).toBeFalsy();
        
    });

    test('debe de llamar la funcion de incrementar ', () => {

        
        useFetch.mockReturnValue({
            data: [{ author: 'Gustav', quote: 'Hola Gustav'}],
            isLoading: false,
            hasError: null
        })

        render( <MultipleCustomHooks />);

        const netxButton = screen.getByRole('button', { name: 'Next Quote' });
        fireEvent.click( netxButton );

        expect( mockIncrement ).toHaveBeenCalled()

    });

});