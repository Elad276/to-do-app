import { useState } from 'react'
import styles from './TodoForm.module.css'
import { PRIORITY_DEFAULT } from "../constants/priorities";
import { TodoFormFields } from '../TodoFormFields/TodoFormFields';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { getTodoSchema } from '../../schemas/todo';

export function TodoForm({ onCreateTodo }) {
    const [showAllFields, setShowAllFields] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(getTodoSchema({ isNew: true } )),
        defaultValues: {
            description: "",
            deadline: "",
            priority: PRIORITY_DEFAULT,
            completed: false,
        },
    });

    function handleCreate(data) {
        onCreateTodo(data);
        reset();
    }

    return (
        <section>
            <h3 className={styles.Title}>
                <span>Create New Task</span>
                <button onClick={() => setShowAllFields(!showAllFields)}>
                    {showAllFields ? "Hide" : "Show"} all fields
                </button>
            </h3>

            <form className={styles.Form} onSubmit={handleSubmit(handleCreate)}>
                <TodoFormFields 
                 showAllFields={showAllFields}
                 register={register} 
                 errors={errors} />
                <input type="submit" value="Add Task" />
            </form>
        </section>
    );
}


