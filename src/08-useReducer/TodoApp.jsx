import { useReducer, useEffect } from "react"
import { todoReducer } from "./todoReducer"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"




const initialState = [

    // {
    //     id: new Date().getTime(),
    //     // no es necesario utilizar las instrucciones de Date() y getTime() para generar instrucciones
    //     description: 'Recolectar la piedra del alma',
    //     done: false,
    // },
    // {
    //     id: new Date().getTime() * 3,
    //     // Lo multiplico x3 para asegurar que va a arrojar otro número, a veces arroja el número tan rápido, que te puede generar el mismo ID
    //     description: 'Recolectar la piedra del tiempo',
    //     done: false,
    // },
    // // tengo mi initialState con dos entradas

]


export const TodoApp = () => {

    // 'todos'(to do) es nuestra lista de tareas que tenemos pendientes, en cuanto a 'dispatch' si tenemos más reduce que se disparan le podemos colocar dispatchTodoAction para indicar que es la función que despacha acciones, se llama 'dispatch' porque sólo envío un reducer

    // ..todos es lo mismo que decir state

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }


    const [todos, dispatch] = useReducer(todoReducer, initialState, init)
    // Nuestro estado es controlado por un useReducer
    // ..todoReducer no lo ejecuto ej. todoReducer(), para que en su debido momento useReducer lo ejecute


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) || [])
    }, [todos])
    // localStorage recibe sólo string por lo tanto voy a pasarlo con JSON, cuando me aparece object.object es porque recibo un objeto y lo estoy convirn¿tiendo a string y eso no me sirve

    // localStorage viene directamente como una API de javaScripy, así como fetch por eso no hay que importarlos 

    // Qué hace el useEffect ? cada vez que detecta un cambio en todos (lo que yo coloque adentro de los corchetes) o al inicializar mi componente, va a disparar una acción (se dispara), el return es una función de limpieza


    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
            // payload es la accion que le quiero mandar a mi reducer; entonces tdo es el estado que quiero enviar; todos es el estado actual de mi aplicación 
        }
        // Envío la acción a useReducer --> cae en todoReducer mediante la función dispatch, despacho la acción
        dispatch(action);
        //Al principio sólo era una Función de referencia para que aparezca en consola antes de generar la función principal 
        // console.log(({ todos }));
    }

    // En la función handleDeleteTodo recibo el Id del TODO a eliminar 

    const handleDeleteTodo = (id) => {

        // console.log({ id });
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });

    }

    //  dispatch en la función que despacha acciones hacia ese reduce en paticular, si solo envía una acción usualmente se le llama dispash, sino se llamaría algo así como (dis)
    // todoReducer no lo ejecuto, sino que paso la referencia a useReducer para cuando lo tenga que ejecutar

    const handleToggleTodo = (id) => {
        console.log(id);


    }

    return (

        // De la aplicación principal yo genero la información y envío a mis otras aplicaciones, no al revés como lo suponíamos

        <>
            <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
            <hr />

            {/* Creas un contenedor row, para luego dividir las 12 columnas entre dos div */}
            <div className="row">
                <div className="col-7">
                    {/* TodoList se va a encargar todo lo concerniente a la lista */}
                    {/* Para borrar un Todo, hago que mi TodoList emita un evento, en este caso onDeleteTodo, tengo que asegurarme que onDeleteTodo emita el id, como envío sólo un argumento puedo colocarlo o no */}
                    <TodoList todos={todos} onDeleteTodo={id => handleDeleteTodo(id)} onToggleTodo={handleToggleTodo} />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    {/* onNewTodo es una prop que lleva consigo la función handleNewTodo*/}
                    <TodoAdd onNewTodo={todo => handleNewTodo(todo)} />
                    {/* Como estoy mandando a la función el 'todo' por referencia (que sería newtodo), como es un sólo argumento puedo colocarlo o no*/}

                </div>
            </div>

        </>




    )
}
