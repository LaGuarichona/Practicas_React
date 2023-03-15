import { useNumeral } from "../hooks/useCounter";


export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useNumeral();

    return (
        <>
            <h1>Counter with Hook: {counter} </h1>
            <hr />

            {/* //Cuando envío la función recibo como una función vacía (reset) función de referencia */}
            {/* Cuando llame a incrementar voy a enviar el 2 */}


            <button className="btn btn-primary" onClick={(() => increment(2))}>+1</button>
            <button className="btn btn-primary" onClick={(reset)}>Reset</button>
            <button className="btn btn-primary" onClick={(() => decrement(2))}>-1</button>

        </>

    )
}
