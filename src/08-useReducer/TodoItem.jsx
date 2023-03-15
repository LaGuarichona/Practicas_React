

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {

    // Tenemos que implementar onDeletetodo en TodoItem



    // Recibo un argumento, que es 'todo', puedo destructurar y recibir de manera independiente, es decir; el done, description y el id.
    return (
        <>
            <li key={todo.id} className="list-group-item d-flex justify-content-between">
                <span onClick={() => onToggleTodo(todo.id)} className="align-self-center">{todo.description}</span>
                <button
                    className="btn btn-danger"
                    onClick={() => onDeleteTodo(todo.id)}
                // Aquí implementamos el onDeleteTodo(el onDeleteTodo lo recibo) y le envío el todo.id
                >Borrar</button>
            </li>

        </>
    )
}
