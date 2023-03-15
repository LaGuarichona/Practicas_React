import { useState } from "react"


export const useNumeral = (initialValue = 1) => {

    const [counter, setCounter] = useState(initialValue)

    //puede ser un objeto, un arreglo, un valor booleano, lo que necesites que regrese

    const increment = (value = 1) => {
        setCounter(counter + value)
    };

    const decrement = (value) => {
        // if (counter === 0 || counter === initialValue) return;
        setCounter(counter - 1);
    };

    const reset = () => {
        setCounter(initialValue)
    };


    return {
        counter,
        increment,
        decrement,
        reset,

    }

}