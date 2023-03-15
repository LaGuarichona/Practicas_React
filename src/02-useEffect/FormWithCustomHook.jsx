import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";


export const FormWithCustomHook = () => {

    // customHook con varias funcionalidades para manejo 

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: '',

    });

    // const { username, email, password } = formState;


    // const [formState, setFormState] = useState({
    //     username: '',
    //     email: '',
    //     password: '',
    // });

    // const { username, email, password } = formState;

    // const onInputChange = ({ target }) => {
    //     const { name, value } = target;
    //     // console.log({ name, value });
    //     setFormState({
    //         ...formState,
    //         [name]: value,
    //     });
    //     // "onChance" está enviando un evento [event] a la función "onInputChance", en el argumento puedo desestructurar lo que necesito del input, dentro del target están los valores del [input].
    // }

    // El  "useEffect" se dispara cada vez que haya algún cambio en la función a la cuál está referida

    useEffect(() => {
        console.log('useEffect called!');
    }, []);


    useEffect(() => {
        console.log('useEffect changed!');
    }, [formState]);


    useEffect(() => {
        console.log('email changed!');
    }, [email]);


    return (
        <>
            <h1>Formulario with CustomHook</h1>
            <hr />

            <input type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}

            // el evento que nos está disparando esta caja de texto, "input"; va a pasar como el primer argumento que va a recibir la función
            />

            {/* Las entradas de clases son de boostrap */}

            <input type="email"
                className="form-control mt-2"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onResetForm} className="btn btn-primary mt-2"> Borrar </button>

        </>

    )
}
