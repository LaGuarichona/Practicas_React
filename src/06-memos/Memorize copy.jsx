
import { useState } from 'react';
import { useNumeral } from '../hooks'
import { Small } from './Small';

const Memorize = () => {

    // Este componente se está redibujando cada vez que surge un cambio en el state

    const { counter, increment } = useNumeral(5);
    const [show, setShow] = useState(true)
    return (
        <>
            <h1>Counter: <Small value={counter} /> </h1>
            {/* Que pasa cuando sucede un cambio en el componente padre, pero no tiene nada que ver con el componente Small, se vuelve a redibujar porque el componente padre vuelve a ejecutar cada línea de código*/}
            <hr />

            <button
                className='btn btn-primary'
                onClick={() => increment()}>
                +1 🍎


            </button>

            <button className="btn btn-outline-primary"
                onClick={() => setShow(!show)}
            >

                Show/Hide {JSON.stringify(show)}

            </button>

        </>

    )
}

export default Memorize
