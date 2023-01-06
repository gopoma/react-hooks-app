import {useState} from "react";

const useForm = (initialFormState) => {
    const [formState, setFormState] = useState(initialFormState);

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        });
    };
    const onResetForm = () => {
        setFormState(initialFormState);
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm        
    };
};

export default useForm;