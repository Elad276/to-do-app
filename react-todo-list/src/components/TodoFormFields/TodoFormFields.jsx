import styles from './TodoFormFields.module.css';
import { PRIORITIES, PRIORITY_DEFAULT } from "../constants/priorities";

export function TodoFormFields( {todo={}, showAllFields = true} ) {
    return (
        <div className={styles.FormFields}>
            <div className={styles.FormFields}>
                <input
                    type="text"
                    placeholder="Task name"
                    name="name"
                    autoComplete='off'
                    defaultValue={todo.name}
                />
            </div>

            {showAllFields && (
                <>
                    <div className={styles.FormFields}>
                        <textarea
                            placeholder="Task description"
                            rows={3}
                            name="description"
                            defaultValue={todo.description}
                        />
                    </div>

                    <div className={styles.FromGroup}>
                        <div className={styles.FormField}>
                            <label htmlFor="deadline">Deadline</label>
                            <input type="date" id="deadline" name="deadline" defaultValue={todo.deadline} />
                        </div>
                        <div className={styles.FormField}>
                            <label htmlFor="priority">Priority</label>
                            <select
                                defaultValue={todo.priority ?? PRIORITY_DEFAULT}
                                id="priority"
                                name="priority">

                                {Object.entries(PRIORITIES).map(([key, { label }]) => (
                                    <option key={key} value={key}> {label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}