import { useState } from "react"
import Style from './Adder.module.css'

function Adder({getTask:sendTask}){
    const [task, setTask] = useState({name: ""})

    function handleChange(event){
        setTask(()=>({name: event.target.value}))
    }

    function handleSubmit(event){
        event.preventDefault()
        const newTask = {...task, id: crypto.randomUUID()}
        sendTask(newTask)
        setTask((prevTask)=>({...prevTask, name: ""}))
    }

    return(
        <form onSubmit={handleSubmit} className={Style.container}>
            <p className={Style.title}>What would you like to do?</p>
            <input type="text" value={task.name} onChange={handleChange} className={Style.input}/>
            <div className={Style.line}></div>
        </form>
            
        
    )
}

export default Adder