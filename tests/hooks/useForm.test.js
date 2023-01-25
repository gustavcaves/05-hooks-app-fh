import { act, fireEvent, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en useForm', () => {


    const inicialForm = {
        name: 'Gustav',
        email: 'gustav@gustavgoogle.com'
    }

    test('debe de regresar los valores por defecto', () => {
        
        const { result } = renderHook( () => useForm( inicialForm ) );
        console.log(result);

        expect( result.current ).toEqual({
            name: inicialForm.name,
            email: inicialForm.email,
            formState: inicialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
          });
    });


    test('debe de cambiar el nombre del formulario', () => {
        
        const newValue = 'Juan';

        // montar el hook

        const { result  } = renderHook( () => useForm( inicialForm ));

        const { onInputChange } = result.current

    
        // onImputChange() act, event...
        act( () => {
            onInputChange( { target: { name: 'name', value: newValue }} )
        });


        expect( result.current.name ).toBe(newValue)
        expect( result.current.formState.name ).toBe(newValue)

        // expect, result.current.name === Juan
        // expect, result.current.formState.name === Juan
    });


    test('debe de ralizar el reset del formulario', () => {
        
        const newValue = 'Juan';
        const { result  } = renderHook( () => useForm( inicialForm ));
        const { onInputChange, onResetForm } = result.current

        act( () => {
            onInputChange( { target: { name: 'name', value: newValue }} )
            onResetForm()
        });


        expect( result.current.name ).toBe(inicialForm.name)
        expect( result.current.formState.name ).toBe(inicialForm.name)

    });


    
});