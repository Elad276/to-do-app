import styles from "./TodoList.module.css";
import { TodoListItem } from "../TodoListItem/TodoListItem";


export function TodoList({ todos, onToggleTodo, onUpdateTodo ,onDeleteTodo}) {
  return (
    <section>
      <h3>To-Do's</h3>
      {!todos.length && <p>No to-do's found. Add a new one!</p>}

      <ul className={styles.TodoList}>
        {todos.map((todo) => (
            <TodoListItem 
            key={todo.id} 
            todo={todo} 
            onToggleTodo={onToggleTodo}
            onUpdateTodo={onUpdateTodo}
            onDeleteTodo={onDeleteTodo}
            />
        ))}
      </ul>
    </section>
  );
}