import { useMemo, useState } from "react";
import { useCounter } from "../hooks"


// Create a code in what you define a JavaScript function called "heavyStuff" that takes in one argument, "iterationNumber", which defaults to 100 if no value is passed. The function runs a loop that logs the message "Ahí vamos..." to the console "iterationNumber" times, and then returns a string that shows the number of iterations done.

const heavyStuff = ( iterationNumber = 100 ) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Hay vamos...');
    }

    return `${ iterationNumber } iterationes realizadas`
}




export const MemoHook = () => {
    
    const { counter, increment } = useCounter(1);
    const [ show, setShow ] = useState(true);
    
    const memorizedValue = useMemo( () => heavyStuff(500), [counter] )
    
  return (
    <>

        <h1>Counter: <small>{ counter }</small> </h1>
        <hr />

        <h4>{ memorizedValue }</h4>

        <button
            className="btn btn-primary"
            onClick={ () => increment() }
        >
            +1
        </button>

        <button
            className="btn btn-outline-primary"
            onClick={ () => setShow( !show )}
        >
            Show/Hide { JSON.stringify(show) }
        </button>

    </>
  )
}
