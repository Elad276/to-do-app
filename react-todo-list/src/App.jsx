import styles from './App.module.css'
import { TodoForm } from './components/TodoForm/TodoForm'
import { TodoList } from './components/TodoList/TodoList'
import {TodoFilters} from './components/TodoFilters/TodoFilters'
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
    deadline: '2026-07-13',
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
  const [filters, setFilters] = useState({})


  function handleCreateTodo(newTodo) {
    setTodos((prevTodos) => [...prevTodos,
      { id: `${prevTodos.length + 1}`, ...newTodo },]);
  }

  function handleToggleTodo(id) {
    setTodos((prevTodos) =>
       prevTodos.map((todo) =>
         todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  }

  function handleUpdateTodo(id, updatedTodo) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedTodo } : todo));
  }

  function handleDeleteTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id));
  }

  function handleFilter(filter) {
    setFilters(filter);
  }

  function filterTodos(todo) {
    const { completed, priority } = filters;

    return (
      (completed === "" || todo.completed === completed) &&
      (priority === "" || todo.priority === priority)
    );
  }


  return (
   <div className={styles.App}> 
    <header className={styles.Header}>
      <img className={styles.Logo} src = "/to-do-list.png" />
      <h2 className={styles.Title}>To-Do Application</h2>
    </header>
     <div className={styles.AppContainer}>
       <TodoForm onCreateTodo={handleCreateTodo} />
       <TodoFilters onFilter={handleFilter} />
        <TodoList 
        todos={todos.filter(filterTodos)} 
        onToggleTodo={handleToggleTodo} 
        onUpdateTodo={handleUpdateTodo}
        onDeleteTodo={handleDeleteTodo}
        />
     </div>
   </div>
  )
}

export default App
