import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef()
    console.log(inputRef);


    const onClick = () => {
        inputRef.current.select();
        //Lo que hace el document es un print-pantalla; busca la palabra 'input'o la que coloques y aplica la acción, en este caso, focus() o select(); este método no me sirve si tengo varios 'input', para ello uso el <useRef>
        // document.querySelector('input').select();

    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={inputRef}
                type="text"
                placeholder='Ingrese su nombre'
                className='form-control'

            />
            <input
                // ref={inputRef}
                type="text"
                placeholder='Ingrese su nombre'
                className='form-control mt-2'
            />

            <button className='btn btn-primary mt-2'
                onClick={onClick}>
                Set focus
            </button>

        </>

        // Por qué trabajar con useRef en vez de let (da error)? Porque let establece una variable, un string; en cambio useRef es un Hook, el cual describe el estado de un componente. Son dos cosas diferentes 
    )
}
