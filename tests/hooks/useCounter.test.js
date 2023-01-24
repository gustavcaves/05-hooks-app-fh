import { renderHook, waitForElementToBeRemoved } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruebas en el useCounter', () => {
    
    test('debe retornar los valores por defecto', () => {
        
        const { result } = renderHook( () => useCounter() )
        // console.log(result)
        const { counter, increment, decrement, reset } =  result.current

        expect( counter ).toBe(10);
        expect( decrement ).toEqual( expect.any( Function ) )
        expect( increment ).toEqual( expect.any( Function ) )
        expect( reset ).toEqual( expect.any( Function ) )

    });

    test('debe generar el counter con el valor de 100', () => {
        

        const { result } = renderHook( () => useCounter(100) )
        expect( result.current.counter ).toBe(100)

    });

});