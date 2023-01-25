const { render, screen } = require("@testing-library/react");
const { MultipleCustomHooks } = require("../../src/03-examples/MultipleCustomHooks");



describe('Pruebas en <MultipleCustomHooks />', () => {
    

    test('debe de mostrar el componente por defecto', () => {
        

        render( <MultipleCustomHooks />);

        expect( screen.getByText('Loading...'));
        expect( screen.getByText('BreakingBad Quotes'));

        const nextButton = screen.getByRole('button', { name: 'Next Quote'})
        // console.log(nextButton.disabled) => disable tag en return jsx del componente en el button
        expect( nextButton.disabled ).toBeTruthy()
        // screen.debug()

    });



});