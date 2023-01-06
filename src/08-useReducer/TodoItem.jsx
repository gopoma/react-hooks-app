import PropTypes from "prop-types";

const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span
                className={`align-self-center ${(todo.done) ? "text-decoration-line-through" : ""}`}
                onDoubleClick={() => onToggleTodo(todo.id)}
                role="button"
            >
                {todo.description}
            </span>
            <button 
                className="btn btn-danger"
                onClick={() => onDeleteTodo(todo.id)}
            >
                Borrar
            </button>
        </li>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired
    })
};

export default TodoItem;