import { useState } from 'react'
import styles from './TodoForm.module.css'
import { PRIORITIES, PRIORITY_DEFAULT } from "../constants/priorities";
import { TodoFormFields } from '../TodoFormFields/TodoFormFields';

export function TodoForm({ onCreateTodo }) {
    const [showAllFields, setShowAllFields] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        console.log('Form submitted');

        const { elements } = event.target;
        if (elements.name.value === '') {
            return;
        }

        onCreateTodo({
            name: elements.name.value,
            description: elements.description?.value ?? '',
            deadline: elements.deadline?.value ?? '',
            priority: elements.priority?.value ?? PRIORITY_DEFAULT,
            completed: false,
        });

        event.target.reset();
    }
    return (
        <section>
            <h3 className={styles.Title}>
                <span>New To-Do</span>
                <button onClick={() => setShowAllFields(!showAllFields)}>
                    {showAllFields ? "Hide" : "Show"} all fields
                </button>
            </h3>

            <form className={styles.Form} onSubmit={handleSubmit}>
                <TodoFormFields showAllFields={showAllFields} />
                <input type="submit" value="Add Task" />
            </form>
        </section>
    );
}


