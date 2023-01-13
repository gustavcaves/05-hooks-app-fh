import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
      (c) => {
        // console.log('setCounter( counter +1);')
        setCounter( (value) => value + c );
      },
      [],
    )
    

    // const incrementFather = () => {
    //   setCounter( counter +1);
    // }

  return (
    <>
        <h1>useCallback Hook {counter} </h1>
        <hr />

        <ShowIncrement increment={ incrementFather } />

    </>
  )
}
