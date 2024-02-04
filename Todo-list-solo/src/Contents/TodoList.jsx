import ListStyle from "./TodoList.module.css";
import cross from "../assets/cross.png";
import check from "../assets/check.png";
import { useState } from "react";

function TodoList({ List, remove: sendTaskRemove, complete: sendTaskComplete }) {
  const [isHover, setHover] = useState(Array(List.length).fill(false))

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

 
  

  return (
    <>
      <div className={ListStyle["Todo-list-container"]}>
        <p className={ListStyle.title}>TASK</p>
        <div className={ListStyle.line}></div>
        <ul className={ListStyle["Todo-list"]}>
          {List.map((task, index) => (
            <li key={task.id} className={ListStyle.task} onMouseEnter={()=>handleEnter(index)} onMouseLeave={()=>handleLeave(index)}>
              {" "}
              {task.name}{" "}
              <button onClick={()=>sendTaskRemove(task)} className={ListStyle[isHover[index] ? "remove-button" : "button-hidden"]}>
                <img src={cross} alt="remove-icon" className={ListStyle["remove-button-icon"]}/>
              </button>{" "}
              <button onClick={()=> sendTaskComplete(task)} className={ListStyle[isHover[index] ? "complete-button" : "button-hidden"]}>
                <img src={check} alt="completed-icon" className={ListStyle["complete-button-icon"]}/>
                
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
