import { act, renderHook, waitForElementToBeRemoved } from "@testing-library/react";
// import { act } from "react-dom/test-utils";
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruebas en el useCounter', () => {
    
    test('debe retornar los valores por defecto', () => {
        
        const { result } = renderHook( () => useCounter() )
        // console.log(result)
        const { counter, increment, decrement, reset } =  result.current

        expect( counter ).toBe(10);
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );

    });

    test('debe generar el counter con el valor de 100', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        expect( result.current.counter ).toBe(100);

    });

    
    test('debe de incrementar el contador', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { counter, increment } =  result.current;

        act( ()=> {
            increment();
            increment(2);
        })

        expect( result.current.counter ).toBe(103);

    });

    
    test('debe de decrementar el contador', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { counter, decrement } =  result.current;

        act( ()=> {
            decrement();
            decrement(2);
        })

        expect( result.current.counter ).toBe(97);

    });

    test('debe realizar el reset', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { counter, increment, reset } =  result.current;

        act( ()=> {
            increment();
            reset();
        })

        expect( result.current.counter ).toBe(100);
        
    });


});