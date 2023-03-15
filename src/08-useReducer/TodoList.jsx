import { TodoItem } from "./TodoItem"


//  =[] parámetro por defecto, para que no arroje un undefined
export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
    // Aunque TodoItem no emite el evento de onDeleteTodo, lo tengo que enviar a través de él, porque TodoItem que es el que emite el evento es hijo de este 
    console.log(todos);
    return (
        <>
            {/* Estamos pasando del elemento más grande al más pequeño */}
            <ul className="list-group">
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} onDeleteTodo={id => onDeleteTodo(id)} onToggleTodo={onToggleTodo} />
                    // onDeleteTodo va a volver a llamar a onDeleteTodo
                    // Las llaves dentro del componente es parte de la redacción
                    // El todo que colocamos adentro es el mismo que tenemos arrriba en el map
                ))
                }
            </ul>

        </>
    )
}
