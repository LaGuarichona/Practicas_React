import { useLayoutEffect, useRef, useState } from "react"


export const QuoteCarga = ({ mensaje: perro, autor: gato }) => {

    const Referencia = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

    useLayoutEffect(() => {

        const { width, height } = (Referencia.current.getBoundingClientRect());
        setBoxSize({ width, height })

        // console.log(Referencia.current.getBoundingClientRect());
    }, [perro])

    // Tiene una dependencia, se dispara cada vez que el quote cambie, por ello[quote]

    return (
        <>
            <blockquote
                className="blockquote text-end"
                style={{ display: 'flex' }}>

                <p ref={Referencia} className="mb-2">{perro}</p>
                <footer className="blockquote-footer">{gato}</footer>
            </blockquote>

            {/* Señalización del objeto boxSize */}
            <code>{JSON.stringify(boxSize)}</code>

            {/* Establezco un tamaño que varia según el cambio del quote con style - display - flex y observo cual es su tamaño con useLayouutEffect */}
        </>
    )


}
