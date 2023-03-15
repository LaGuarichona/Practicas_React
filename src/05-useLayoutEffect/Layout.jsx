import { useState } from "react";
import { useFetch, useNumeral } from "../hooks";
import { LoadingQuote, QuoteCarga } from "../03-examples";




export const Layout = () => {
    // const [quoter, setQuoter] = useState([]);

    const { counter, increment } = useNumeral()

    const { data, isLoading, hasaError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)

    //    Si le pongo la {} muestra el nombre de la variable
    console.log({ data });


    //Desestructuro author y quote, si data existe, y envío a QuoterCarga
    const { author, quote } = Boolean(data) && data[0];
    // Si la data tiene un valor, entonces toma la data en la posición "0"

    //setear
    // const onNewQuoter = (author, quote) => {
    //     setQuoter([{ author, quote }, ...quoter])
    // };
    // console.log({ onNewQuoter });



    return (
        <>

            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading
                    ?
                    //*Se encarga de mostrar el loading 
                    <LoadingQuote />

                    // Envío el author y el quote, Se encarga de mostrar el componente y enlistarlo 
                    :
                    <QuoteCarga autor={author} mensaje={quote} />

                //Quiero que espacio en el Dom permitido para el Quore se adapte más al quore en sí y no que todos tengan el mismo tamaño a pesar de las diferencias 

            }


            {/* Puedes usar comillas sencillas, no es html; sino jsx */}

            <button
                className='btn btn-primary'
                onClick={() => increment()}
                disabled={isLoading}>
                Next quote
            </button>
        </>
    )
}

