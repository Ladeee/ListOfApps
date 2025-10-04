import { useEffect, useRef, useState } from 'react'
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import './todo-app.css'

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodos, setNewTodos] = useState ('');
  const [editIndex, setEditIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect (() => {
    const savedTodos = localStorage.getItem("todos")
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
    setLoading(false)
  },[]) //runs once

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("todos", JSON.stringify(todos))
    }
  }, [todos, loading])

  const handleTodos = (e) => {
    setNewTodos(e.target.value)
  }

  const handleAddTodos = (e) => {
    e.preventDefault();
    if (newTodos.trim()) {
      if (editIndex !== null) {
        const updatedTodos = [...todos]
        updatedTodos[editIndex].text = newTodos
        setTodos(updatedTodos)
        setEditIndex(null)
      } else {
        setTodos(() => [...todos, {text: newTodos, completed: false}])
      }
      setNewTodos('')
    }
  }

  const handleDelete = (deleteTodo) => {
    setTodos(() => todos.filter((todo, index) => index !== deleteTodo))
  }

  const handleEdit = (index) => {
    setNewTodos(todos[index].text)
    setEditIndex(index)
  }

  const handleCompleted = (completedTodos) => {
    setTodos(() => todos.map((todo, index) => index === completedTodos ? { ...todo, completed: !todo.completed } : todo))
  }

  if (!loading) {
    <p>Loading...</p>
  }

  return (
    <div className='todo-container'>
      <div className="todo-wrapper">
        <h1>Trusty TodoApp</h1>

        <div className="add-input">
          <input
            type="text"
            placeholder='What is your plan?'
            value={newTodos}
            className='todo-input'
            onChange={handleTodos}
          />
          <button className='add' onClick={handleAddTodos}>{editIndex ? "Update" : "Add"}</button>
        </div>

        <div className="todolist">
         {
              todos.map((todo, index) => (
                <div className="checkbox-list-delete" key={index}>
                  <div className="checkbox-list">
                    <MdCheckBoxOutlineBlank className={todo.completed ? "check" : "checkbox-icon"} onClick={() => handleCompleted(index)}/>
                    <h3 className={todo.completed ? 'complete' : 'list'} >{todo.text}</h3>
                  </div>
                  <div className="edit-delete">
                    <MdEdit className='edit-icon' onClick={() => handleEdit(index)} />
                    <MdDelete className='checkbox-icon' onClick={() => handleDelete(index)} />
                  </div>
                </div>
              ))
         }
        </div>
      </div>
    </div>
  )
}
