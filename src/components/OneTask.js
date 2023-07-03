import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={() => {onToggle(task.id)}}>
      {/* each task contains task name with red x using fatimes that has delete property  and day of task*/}
      <h3>{task.text} <FaTimes style={{color: "red", cursor: "pointer"}} onClick={() => onDelete(task.id)}/></h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
