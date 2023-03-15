import { useEffect, useState } from "react";


export const useFetch = (url) => {


    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasaError: null,
    })


    const getFetch = async () => {

        // setState({
        //     ...state,
        //     isLoading: true,

        // });

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasaError: null,
        })

    }

    useEffect(() => {
        getFetch();
    }, [url])

    // Cada vez que el url cambia se va a disparar, si es el mismo no se dispara mi useEffect. Fetch y el API es algo que ya viene con JavaScript




    return {
        data: state.data,
        isLoading: state.isLoading,
        hasaError: state.hasaError,

    };

}


