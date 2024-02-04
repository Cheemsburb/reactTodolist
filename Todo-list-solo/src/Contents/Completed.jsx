import { useState } from "react";
import Style from './Complete.module.css'
import cross from '../assets/cross.png'


function Completed({completedList, remove:sendTaskRemove}){
    const [isHover, setHover] = useState(Array(completedList.lenght).fill(false))

    function handleEnter(i){
        setHover((prevHover)=>{
            const newHover = [...prevHover]
            newHover[i] = true;
            return newHover
        })
    }

    function handleLeave(i){
        setHover((prevHover)=>{
            const newHover = [...prevHover]
            newHover[i] = false;
            return newHover
        })
    }



    return(
        <div className={Style.container}>
            <p className={Style.title}>COMPLETED TASKS</p>
            <ul className={Style["completed-list"]}>
                {completedList.map((cTask, index)=> <li className={Style.task} key={cTask.id} onMouseEnter={()=>handleEnter(index)} onMouseLeave={()=>handleLeave(index)}>{cTask.name} <button className={Style[isHover[index] ? "remove-button" : "button-hidden"]} onClick={()=>sendTaskRemove(cTask)}> <img className={Style["remove-icon"]} src={cross} alt="completed-list-remove-icon" /></button></li>)}
            </ul>
        </div>
    )
}

export default Completed