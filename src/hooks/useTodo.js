import {useEffect, useReducer} from "react";
import todoReducer from "../08-useReducer/todoReducer";

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
};

const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const onNewTodo = (todo) => {
        dispatch({
            type: "[TODO] Add Todo",
            payload: todo
        });
    };

    const onDeleteTodo = (idTodo) => {
        dispatch({
            type: "[TODO] Remove Todo",
            payload: idTodo
        });
    };

    const onToggleTodo = (idTodo) => {
        dispatch({
            type: "[TODO] Toggle Todo",
            payload: idTodo
        });
    };

    const todosCount = todos.length;
    const pendingTodosCount = todos.filter((todo) => !todo.done).length;

    return {
        todos,
        todosCount,
        pendingTodosCount,
        onNewTodo,
        onDeleteTodo,
        onToggleTodo
    };
};

export default useTodo;