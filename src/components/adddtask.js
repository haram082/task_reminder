import {useState} from 'react'
// create use states for adding different components
const Addtask = ({onAdd}) => {
    const [text, setText]= useState("")
    const [day, setDay]= useState("")
    const [reminder, setReminder]= useState(false)
const onSubmit = (e)=>{
    e.preventDefault()
    if(!text){
        alert("Please add a task")
        return
    }
    onAdd({text, day, reminder})
    setText("")
    setDay("")
    setReminder(false)
}
// for each input, set value to its useState input changing value as label is updated
  return (
    <form className='add-form' onSubmit ={onSubmit}>
        <div className="form-control">
            <label >Task</label>
            <input type="text" placeholder="Add Task" value={text.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')} 
            onChange={(e)=> setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label >Day & Time</label>  
            <input type="text" placeholder="Add Time" value={day} onChange={(e)=> setDay(e.target.value)}/>
        </div>
        <div className="form-control form-control-check">
            <label >Reminder</label>
            <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)}/>
        </div>
        <input type='submit' value='Save Task' className='btn btn-block'/>
    </form>
  )
}


export default Addtask
