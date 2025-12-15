import { useState } from 'react'
import styles from './TodoForm.module.css'
import { PRIORITIES, PRIORITY_DEFAULT } from "../constants/priorities";

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
                <div className={styles.FormFields}>
                    <div className={styles.FormFields}>
                        <input
                            type="text"
                            placeholder="Task name"
                            name="name"
                            autoComplete='off'
                        />
                    </div>
                    {showAllFields && (
                        <>
                            <div className={styles.FormFields}>
                                <textarea
                                    placeholder="Task description"
                                    rows={3}
                                    name="description"
                                />
                            </div>

                            <div className={styles.FromGroup}>
                                <div className={styles.FormField}>
                                    <label htmlFor="deadline">Deadline</label>
                                    <input type="date" id="deadline" name="deadline" />
                                </div>
                                <div className={styles.FormField}>
                                    <label htmlFor="priority">Priority</label>
                                    <select 
                                      defaultValue={PRIORITY_DEFAULT}
                                      id="priority" 
                                      name="priority">

                                        {Object.entries(PRIORITIES).map(([key, {label}]) => (
                                            <option key={key} value={key}> {label}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </>
                    )}
                </div>
                <input type="submit" value="Add Task" />
            </form>
        </section>
    );
}


