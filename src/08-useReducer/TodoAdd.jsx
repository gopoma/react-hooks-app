import useForm from "./useForm";

const TodoAdd = ({onNewTodo}) => {
    const {description, formState, onInputChange, onResetForm} = useForm({
        description: ""
    });

    const onSubmit = (event) => {
        event.preventDefault();
        // const description = event.target.description.value;
        // onNewTodo && onNewTodo();
        if(description.trim().length === 0) return;
        const newTodo = {
            id: new Date().getTime(),
            description: description.trim(),
            done: false
        };
        onNewTodo(newTodo);
        onResetForm();
    };

    return (
        <form onSubmit={onSubmit}>
            <input 
                className="form-control"
                name="description"
                onChange={onInputChange}
                placeholder="¿Qué hay que hacer?"
                type="text" 
                value={description}
            />

            <button
                className="btn btn-outline-primary mt-1"
                type="submit"
            >
                Agregar
            </button>
        </form>
    );
};

export default TodoAdd;