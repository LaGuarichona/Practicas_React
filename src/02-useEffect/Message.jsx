import React, { useEffect, useState } from 'react'


export const Message = () => {

    const [coords, setCoords] = useState(
        {
            x: 0,
            y: 0
        });

    useEffect(() => {

        // Para remover el componente tenemos que hacer referencia a la función, al espacio de memoria donde está definida mi FUNCIÓN Y POR ESO SE ACOSTUMBRA crea la referencia a continuación 

        const onMouseMove = ({ x, y }) => {
            const coords = { x, y };
            setCoords(coords)
        }

        // Cuando el código se crea voy a crear el listening 'mousemove' y lo voy apuntar a la función onMouseMove

        window.addEventListener('mousemove', onMouseMove);
        // No podemos hacer la función dentro del addEvent, sino enviarlo por referencia 
        // console.log('😶‍🌫️ fuga de memoria');
        // console.log('Message Mounted');

        // El componente se desmontó
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            // console.log('Message UnMounted');
        }
    }, [])



    return (
        <>
            <h3>Usuario ya Existe!</h3>
            {JSON.stringify(coords)}
        </>
    )
}


