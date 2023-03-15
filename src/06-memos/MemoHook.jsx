
import { useMemo, useState } from 'react';
import { useNumeral } from '../hooks'

const heavyStuff = (iterationNumber = 10) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Te miro y me multiplico 👀');

    }

    return `${iterationNumber} ejecutadas 🏆`

    // Los 'return' se ejecutan cuando se haga todo el proceso
}


export const MemoHook = () => {

    // Este componente se está redibujando cada vez que surge un cambio en el state

    const { counter, increment } = useNumeral(5);
    const [show, setShow] = useState(true);

    // Memo lo que hace es que se ejecute const heavyStuff solo si la dependecia cambia

    const memorizedMemo = useMemo(() => heavyStuff(counter), [counter])

    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <hr />

            <h4>{memorizedMemo}</h4>

            <button
                className='btn btn-primary'
                onClick={() => increment()}>
                +1 🍎


            </button>

            <button className="btn btn-outline-primary"
                onClick={() => setShow(!show)}>
                Show/Hide {JSON.stringify(show)}

            </button>

        </>

    )
}


