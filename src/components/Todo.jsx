import { useEffect, useReducer, useState } from 'react'
import './Todo.css'
import { todoReducer } from './todoReducer';

export default function Todo() {
  const [todos, dispatch] = useReducer(
    todoReducer,
    [],
    () => JSON.parse(localStorage.getItem("todos")) || []
  );

  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  function addTodo(e) {
    e.preventDefault();   // Prevent Page reload event
    if (!input.trim()) return;
    dispatch({type: "add", text: input});
    setInput("");
  }

  return (
    <div className='todo'>
      <form onSubmit={addTodo} className='todo-input'>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Add Todo'
        />
      </form>
      <ul className='todo-list'>
        {todos.map(todo => (
          <li key={todo.id} className={todo.done ? "done" : ""}>
            <label>
              <input
                type = 'checkbox'
                checked = {todo.done}
                onChange = {() =>
                  dispatch({type:'toggle', id: todo.id})
                }
              />
              {todo.text}
            </label>
            <button
              onClick={() => dispatch({ type:'remove', id:todo.id})}
              aria-label='Delete Todo'
            >✕</button>
          </li>
        ))
        }
      </ul>
    </div>
  );
}
