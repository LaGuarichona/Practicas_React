import { useState } from "react"


export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })

    const { counter1, counter2, counter3 } = counter

    return (
        <>
            <h1>Counter1: {counter1} </h1>
            <h1>Counter2: {counter2} </h1>
            <h1>Counter3: {counter3} </h1>

            <hr />

            {/* // Al trabajar con objetos dentro de Hook, comprendemos que el Counter se trataría de un state, al undir se cae el botón se cae, para ello dentro de mi setcounter especifico que el que quiero modificar es mi counter1 */}

            <button className="btn" onClick={() => setCounter({
                //En vez de colocar counter2 y counter3, trabajo con el operador express
                ...counter,
                counter1: counter1 + 1,

            })}>
                +1
            </button>

            {/* Llamamos al setCounter y dentro de este definimos una propiedad y le asignamos el valor de la variante(counter), para de esta manera poder modificar el UseState, que en este caso esx un objeto, por qué? Cuando llamamos al setcounter también estamos definiendo counter2 y counter 3, es decir todo el objeto. El setcounter redibuja el valor del counter*/}

        </>

    )
}

