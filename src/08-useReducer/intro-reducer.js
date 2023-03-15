console.log('hola');



const initialState = [{
    id: 1,
    todo: "Recolectar la piedra del Alma",
    done: false,
}];

// mi reducer no es más que una función pura, la acción le va a decir a mi Reducer (todoReducer) como quiero que cambie mi estado

const todoReducer = (state = initialState, action = {}) => {

    // Coloco la action con {} como un objeto vacío, ya que n o estoy enviaqndo nada en la variab le let todos

    if (action.type === '[TODO add todo]') {
        return [...state, action.payload]
    }




    return state;
    // Un reducer siempre regresa un estado
    // El estado es como se va a encontrar esa aplicación o esa porción de la misma
}

// Podría llamar initialState o mi último estado que es "todos"

let todos = todoReducer();

// No se utiliza el PushManager, porque no debemos de mutar el estado del arreglo, todos.push({id:..., todo:..., done:.. no se debe hacer}), cuando se quiera modificar un reducer, la manera es mandarle un acción y esa acción le dirá como modificarse


const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del Poder',
    done: false
}

// La acción luce de la siguiente manera; es un estandar xolocarle el "type" y en vez de colocar newtodo; se coloca payload
const addTodoAction = {
    type: '[TODO add todo]',
    payload: newTodo,

    // payload la carga que está en la acción, también puede ser newTodo

}

// payload es la acción que va a modificar en reducer

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });