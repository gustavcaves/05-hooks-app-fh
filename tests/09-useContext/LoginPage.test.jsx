import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Pruebas en <LogingPage />', () => {


    

    test('debe de mostrar el componente sin el usuario', () => {

        render( 
        <UserContext.Provider value={{ user: null }}>
            <LoginPage />
        </UserContext.Provider>
        );

        // screen.debug()

        const preUser = screen.getByLabelText( 'pre' );
        // console.log( preUser.innerHTML )
        expect( preUser.innerHTML ).toBe( 'null' )
        
    });

    test('debe de llamar el setUser cuando se hace click en el boton', () => {

        render( 
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
            );
    
            screen.debug()
    
            const preUser = screen.getByLabelText( 'pre' );
            // console.log( preUser.innerHTML )
            const button = screen.getByRole('button').click;
            // console.log( button )
            fireEvent.click( button );
            expect( preUser.innerHTML ).toBe( { id: 123, name: 'Gustav', email: 'gustav@gmail.com' } )    
        
    });

});