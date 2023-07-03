import Task from "./OneTask"

const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
    // maps out the text value of each tasks, make sure u add indexing key
    <>{tasks.map((task)=>(
    <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>))}</>
  )
}

export default Tasks
  