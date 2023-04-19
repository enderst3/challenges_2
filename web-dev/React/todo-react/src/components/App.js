import React, { useState }from "react";

// could sperate out input, list, form, header, and button, but that is not part of the Challenge

function App() {

  const [newTask, setNewTask] = useState("")
  const [taskList, setTaskList] = useState([])

  function handleChange(event) {
    setNewTask(event.target.value)
  }

  function addTask(event) {
    setTaskList((prevTasks) => {
      return [...prevTasks, newTask]
    })
    setNewTask("")
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
          type="text" 
          value={newTask}
          onChange={handleChange}
        />
        <button onClick={addTask}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {taskList.map((task) => (
            <li>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;