import { useState } from "react";

export const useForm = (initialForm = {}) => {
    // Las llaves dentro del argumento es para garantizar que nadie vaya usar mal mis valores iniciales, indicando que es un objeto 

    // Manejo del estado de mi formulario
    const [formState, setFormState] = useState(initialForm);
    // formState es igual a lo que sea que yo le envíe como argumento 


    //***Entrada de Nombre, contraseña y dirección -- Trabaja con Form WitchCustomHook

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        // console.log({ name, value });
        setFormState({
            ...formState, [name]: value,
        });
    }

    // Resetear la cajita del formulario

    const onResetForm = () => {
        setFormState(initialForm);
    }


    // Las llaves en el return es porque voy a devolver un objeto 
    return {
        formState,
        ...formState,
        onInputChange,
        onResetForm,
    }
}