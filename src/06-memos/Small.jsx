import { memo } from "react";

// memo me va a permitir que, sólo ejecutar cuando haya cambio en una variable
export const Small = memo(({ value }) => {

    // React.memo no corre en vite pero es más común verlo así

    // Usualmente no hace falta poner memo en todas partes, solo cuando hay una depreciación considerable,, y funcionales complejas en el componente para que de esta forma no vuelv a renderizar

    console.log('Me volví a Generar');
    return (
        <small>{value}</small>
    )
})
