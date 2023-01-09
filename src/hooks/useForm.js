import { useState } from "react";

export const useForm = ( inicialForm ) => {

    const [formState, setFormState] = useState( inicialForm )

    // const { username, email, password } = formState;

    const onInputChange = ( { target }) => {
        const { name, value } = target;
        // console.log({name, value})
        setFormState({
            ...formState,
            [name]: value
        })

    }


    const onResetForm = ( ) => {
        setFormState( inicialForm )
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}

