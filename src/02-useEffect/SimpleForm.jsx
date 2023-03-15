import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Patricia',
        email: 'laguarichona@gmail.com',
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        // console.log({ name, value });
        setFormState({
            ...formState,
            [name]: value,
        });
        // "onChance" está enviando un evento [event] a la función "onInputChance", en el argumento puedo desestructurar lo que necesito del input, dentro del target están los valores del [input].
    }

    // El  "useEffect" se dispara cada vez que haya algún cambio en la función a la cuál está referida

    // useEffect(() => {
    //     console.log('useEffect called!');
    // }, []);


    // useEffect(() => {
    //     console.log('useEffect changed!');
    // }, [formState]);


    // useEffect(() => {
    //     console.log('email changed!');
    // }, [email]);


    return (
        <>
            <h1>Formulario Simple</h1>
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

            {/* Esto es una condición "If" resumida */}

            {
                (username === 'Patricia2') && <Message />

            }
        </>

    )
}
