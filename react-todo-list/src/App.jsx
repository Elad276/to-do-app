import styles from './App.module.css'
import { TodoForm } from './components/TodoForm/TodoForm'
import { TodoList } from './components/TodoList/TodoList'
import { useState } from 'react'

const TODOS_DEFAULT = [
  {
    id: '1',
    name: 'Buy groceries',
    description: 'Buy groceries for the week',
    deadline: '2025-12-15',
    priority: 'high',
    completed: false,
  },
  {
    id: '2',
    name: 'Wash car',
    description: 'Maybe wash the car',
    deadline: '2026-03-20',
    priority: 'medium',
    completed: false,
  },
  {
    id: '3',
    name: 'Play ball',
    description: 'try shooting from half court',
    deadline: '2026-7-13',
    priority: 'low',
    completed: false,
  },
  {
    id: '4',
    name: 'Go home',
    description: '',
    deadline: '',
    priority: 'none',
    completed: false,
  },
];


function App() {
  const [todos, setTodos] = useState(TODOS_DEFAULT);

  function handleCreateTodo(newTodo) {
    setTodos((prevTodos) => [...prevTodos,
      { id: `${prevTodos.length + 1}`, ...newTodo },]);
  }

  function handleToggleTodo(id) {
    setTodos((prevTodos) =>
       prevTodos.map((todo) =>
         todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  }


  return (
   <div className={styles.App}> 
    <header className={styles.Header}>
      <img className={styles.Logo} src = "/to-do-list.png" />
      <h2 className={styles.Title}>To-Do Application</h2>
    </header>
     <div className={styles.AppContainer}>
       <TodoForm onCreateTodo={handleCreateTodo} />
        <TodoList todos={todos} onToggleTodo={handleToggleTodo}/>
     </div>
   </div>
  )
}

export default App
