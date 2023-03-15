import { useForm } from "../hooks/useForm"

// importar es traerlo y exportar es que va para otra partekk

export const TodoAdd = ({ onNewTodo }) => {



    // Voy a recibir onNewTodo, esa es la función de forma implícita, para luego poder ejecutarla

    const { description, onInputChange, onResetForm } = useForm({ description: '' });
    // Voy a desestructurar algo que viene de useform
    // descripción es el nombre que le doy a mi input, el cual he creado en la parte del return que tengo abajo

    const onFormSubmit = (event) => {
        // Aquí lo importante es recibir el evento -> event. Estoy captando el evento, al hacer clip 
        event.preventDefault();
        if (description.lenght <= 1)
            return;

        // Sino
        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }

        // Emito newTodo

        // Mando a llamar a mandar a llamar, verifico que la función existe, esta es una opción para properties opcionales que se tienen que ejecutar (onNewTodo &&...)
        // Le envío newtodo aonNewTodo
        onNewTodo && onNewTodo(newTodo);

        onResetForm();
    }

    return (

        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                name="description"
                // Le vamos a colocar en name el nombre que yo al final le voy a estar enviando a mi función de inputchance
                value={description}
                onChange={onInputChange}
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-1">
                Agregar
            </button>
        </form>
    )
}
