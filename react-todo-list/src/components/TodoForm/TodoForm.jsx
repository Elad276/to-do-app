import styles from './TodoForm.module.css'

export function TodoForm({onCreateTodo}) {
    function handleSubmit(event) {
        event.preventDefault();
        console.log('Form submitted');

        const {elements} = event.target;
        if(elements.name.value === '') {
            return;
        }

        onCreateTodo({
            name: elements.name.value,
            description: elements.description.value,
            deadline: elements.deadline.value,
            priority: elements.priority.value,
            completed: false,
        });

    event.target.reset();
    }
    return (
        <section>
            <h2 className='{styles.Title}'>Add a new task</h2>

            <form className={styles.Form} onSubmit={handleSubmit}>
                <div className={styles.FormFields}>
                    <div className={styles.FormFields}>
                        <input
                            type="text"
                            placeholder="Task name"
                            name="name"
                        />
                    </div>
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
                            <select defaultValue="none" id="priority" name="priority">
                                <option value="none">None</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <input type="submit" value="Add Task" />
            </form>
        </section>
    );
}


