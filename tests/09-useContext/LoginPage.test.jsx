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

        const setUserMock = jest.fn();

        render( 
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );
    
        
        // console.log( preUser.innerHTML )
        const button = screen.getByRole('button');
        // console.log( button.click )
        fireEvent.click( button );
        const preUser = screen.getByLabelText( 'pre' );
        screen.debug();

        // expect( preUser.innerHTML ).toBe("id: 123, name: 'Gustav', email: 'gustav@gmail.com'")    
        expect( setUserMock ).toHaveBeenCalledWith({"email": "gustav@gmail.com", "id": 123, "name": "Gustav"})


    });

});