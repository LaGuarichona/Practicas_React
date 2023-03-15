

// función pura de js

export const todoReducer = (initialState = [], action) => {

    // Para esta parte usualmente se utiliza un switch
    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload];
        // En esta parte lo que debo regresar es un nuevo State
        // Si todavía no he implementado la acción, coloco un "throw", en caso contrario puede darte una falsa sensación de que se está implementando  
        // throw new Error('Action.type = ABC no está implementada');

        // action está declarada en el componente principal 

        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload)
        // Se utiliza filter, es un método de los arrays que me regresa un nuevo arreglo, no los muta; tal como sucede con push o unshift, 




        default:
            return initialState;
        // Esto se implementa en caso contrario que se esté manejando un type que no se reciba en los case de arriba 
    }



}