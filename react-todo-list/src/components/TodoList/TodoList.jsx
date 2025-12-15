import styles from "./TodoList.module.css";
import { PRIORITIES, PRIORITY_DEFAULT } from "../constants/priorities";


export function TodoList({ todos, onToggleTodo }) {
  return (
    <section>
      <h3>To-Do's</h3>

      <ul className={styles.TodoList}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={styles.TodoListItem}
            data-completed={todo.completed}
          >
            <div className={styles.Content}>
              <input
                type="checkbox"
                name="completed"
                defaultChecked={todo.completed}
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
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}