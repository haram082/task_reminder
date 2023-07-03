import React from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import {useState, useEffect} from "react"
import Addtask from "./components/adddtask"



function App() {
   // [name, func to update task] = useState([{JSON},{JSON}])
    // state is immutatable 
  const[showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  useEffect(()=>{
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])
// fetch tasks 
const fetchTasks = async() =>{
    const res = await  fetch('http://localhost:000/tasks')
    const data = await res.json()
    return data
  }
  const fetchTask = async(id) =>{
    const res = await  fetch(`http://localhost:3000/tasks/${id}`)
    const data = await res.json()
    return data
  }
// make new task by giving a new id and adding it to setTasks once submitted from adddtask.js 
const addTask = async (task) => {
  const res = await fetch('http://localhost:3000/tasks', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(task),
  })

  const data = await res.json()

  setTasks([...tasks, data])

  // const id = Math.floor(Math.random()*1000)+1
  // const newTask= {id, ...task}
  // setTasks([...tasks, newTask])
}
// delete task by setting function in to useState to filter out the task w corresponding id
const deleteTask = async(id) =>{
  await fetch(`http://localhost:3000/tasks/${id}`,{
    method: 'DELETE',
  })
  setTasks(tasks.filter((task)=> task.id !== id)) 
}
// add reminder to true if double
const toggleReminder = async(id) =>{
  const tasktoToggle = await fetchTask(id)
  const updateTask = {...tasktoToggle, reminder: !tasktoToggle.reminder}
  const res = await fetch(`http://localhost:3000/tasks/${id}`, {
    method: "PUT",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updateTask)
  })
  const data = await res.json()
  setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: data.reminder}:task ))
}
  return (
    <div className="container">
{/* declare header to have props where title= Hello*/}
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask} title="My Task Tracker"/>
  {/*add tasks functionalties*/}
      {showAddTask && <Addtask onAdd={addTask}/>}
    {/* pull tasks data into task.js checks for ondelete func */}
    {/* if lenght of tasks > 0 : run Tasks and its prop else: print(no tasks available) */}
      {tasks.length >0  ?
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>: 
      ("No tasks available")}
    </div>
  );
}


// create a class
// class App extends React.Component{
//   render(){
//     return <h1>
//       Hello from a class
//     </h1>
//   }
// }
export default App;

