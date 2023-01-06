const initialState = [{
    id: 1,
    todo: "Asesinar a Patricio",
    done: false
}];

const todoReducer = (state = initialState, action = {}) => {
    if(action.type === "[TODO] add todo") {
        return [...state, action.payload];
    }

    return state;
};

let todos = todoReducer();
console.log({state:todos});

const newTodo = {
    id: 2,
    todo: "Asesinar a Calamardo",
    done: false
};

const addTodoAction = {
    type: "[TODO] add todo",
    payload: newTodo
};

todos = todoReducer(todos, addTodoAction);
console.log({state:todos});