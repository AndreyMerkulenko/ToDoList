  import React from 'react'
  
  function Todo({ todo, toggleTask, removeTask, editTask }) {
      return (
        <div key={todo.id} className="item-todo">
        <div
          className={todo.complete ? 'item-text strike' : 'item-text'}
          onClick={() => toggleTask(todo.id)}>
          {todo.task}
        </div>
        <div className="item-delete" onClick={() => removeTask(todo.id)}>
          X
        </div>
        <div className="item-edit" onClick={() => editTask(todo)}>
          Edit
        </div>
      </div>
      )
  }
  
  export default Todo
  