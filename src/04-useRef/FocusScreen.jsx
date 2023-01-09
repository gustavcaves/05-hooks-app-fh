import { useRef } from "react"

export const FocusScreen = () => {

    const ref = useRef();

    console.log(ref);

    const onClick = () => {
        // document.querySelector('input').select()
        ref.current.select();

    }

  return (
    <>

        <h1>Focus Screen</h1>
        <hr />

        <input 
            type="text"
            placeholder="Ingrese su nombre"
            className="form-control"
        />

        <button
            ref={ref}
            className="btn btn-primary mt-2"
            onClick={ onClick }
            >
            Set Focus
        </button>

    </>
  )
}
