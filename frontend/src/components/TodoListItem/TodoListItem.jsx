import styles from './TodoListItem.module.css';
import { PRIORITIES, PRIORITY_DEFAULT } from "../constants/priorities";
import { TodoFormFields } from '../TodoFormFields/TodoFormFields';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { getTodoSchema } from '../../schemas/todo';


export function TodoListItem({ todo, onToggleTodo, onUpdateTodo , onDeleteTodo}) {
    const [isEditing, setIsEditing] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(getTodoSchema()),
        defaultValues: {
            name: todo.name,
            description: todo.description,
            deadline: todo.deadline,
            priority: todo.priority,
        },
    });
    function handleEdit(data) {
        onUpdateTodo(todo.id, data);
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
        onSubmit={handleSubmit(handleEdit)}
        >
            <TodoFormFields todo={todo} register={register} errors={errors} />
        
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
