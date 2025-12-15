import styles from './TodoListItem.module.css';
import { PRIORITIES, PRIORITY_DEFAULT } from "../constants/priorities";
import { TodoFormFields } from '../TodoFormFields/TodoFormFields';
import { useState } from 'react';


export function TodoListItem({ todo, onToggleTodo, onUpdateTodo , onDeleteTodo}) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEdit(event) {
        event.preventDefault();
        console.log('Form submitted');

        const { elements } = event.target;
        if (elements.name.value === '') {
            return;
        }

        onUpdateTodo(todo.id, {
            name: elements.name.value,
            description: elements.description.value,
            deadline: elements.deadline.value,
            priority: elements.priority.value,
            completed: todo.completed,
        });

        setIsEditing(false);
    }

    const viewMode = (
        <div className={styles.Content}>
            <input
                type="checkbox"
                name="completed"
                checked={todo.completed}
                onChange={() => onToggleTodo(todo.id)}
                className={styles.Status}
            />

            <div className={styles.Info}>
                {todo.name}
                {todo.description && (
                    <span className={styles.Description}>{todo.description}</span>
                )}

                <div className={styles.MoreInfo}>
                    {todo.deadline}{" "}
                    {todo.priority !== PRIORITY_DEFAULT && (
                        <span style={{ color: PRIORITIES[todo.priority].color }}>
                            {PRIORITIES[todo.priority].label}
                        </span>
                    )}
                </div>
            </div>

            <div className={styles.Controls}>
                <button onClick={() => setIsEditing(true)}>
                    ✏️
                </button>
                <button onClick={() => onDeleteTodo(todo.id)}>
                🗑️
                </button>

            </div>
        </div>
    );

    const editMode = (
        <form 
        className={styles.Controls} 
        onReset={() => setIsEditing(false)}
        onSubmit={handleEdit}
        >
            <TodoFormFields todo={todo} />
        
            <div className={styles.Controls}>
                <input type="submit" value="✅" />
                <input type="reset" value="❌" />
            </div>
        </form>
    );

    return (
        <li className={styles.TodoListItem} data-completed={todo.completed}>
            {isEditing ? editMode : viewMode}
        </li>
    );
}
