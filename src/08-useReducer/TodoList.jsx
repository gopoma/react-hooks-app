import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoList = ({todos, onDeleteTodo, onToggleTodo}) => {
    return (
        <ul className="list-group">
            {
                todos.map((todo) => (
                    <TodoItem 
                        key={todo.id}
                        todo={todo}
                        onDeleteTodo={onDeleteTodo}
                        onToggleTodo={onToggleTodo}
                    />
                ))
            }
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired
    }))
};

TodoList.defaultProps = {
    todos: []
};

export default TodoList;