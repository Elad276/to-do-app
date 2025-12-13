import styles from './App.module.css'
import { TodoForm } from './components/TodoForm/TodoForm'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([]);

  function handleCreateTodo(newTodo) {
    setTodos((prevTodos) => [...prevTodos,
      { id: `${prevTodos.length + 1}`, ...newTodo },]);
  }

  return (
   <div className={styles.App}> 
    <header className={styles.Header}>
      <img className={styles.Logo} src = "/to-do-list.png" />
      <h2 className={styles.Title}>To-Do Application</h2>
    </header>
     <div className={styles.AppContainer}>
       <TodoForm onCreateTodo={handleCreateTodo} />
        {JSON.stringify(todos)}
     </div>
   </div>
  )
}

export default App
