import { useState } from 'react';
import Todo from './components/Todo';
import ToDoForm from './components/ToDoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const editTask = (editTask) => {
    let result = prompt('Редактировать задачу', editTask.task);
    if (result) {
      editTask.task = result;
      setTodos([...todos]);
    } else return;
  };

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo },
      ),
    ]);
  };

  return (
    <div className="App">
      <header>
        <h1>Список задач: {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
            editTask={editTask}
          />
        );
      })}
    </div>
  );
}

export default App;