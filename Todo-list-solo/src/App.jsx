// Main Components
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Adder from './Contents/Adder'
import Completed from './Contents/Completed'

import appStyle from './App.module.css'

import TodoList from './Contents/TodoList'
import { useState } from 'react'

//{name: "Learn React", id: crypto.randomUUID()}, {name: "Study Redux", id: crypto.randomUUID()}
//{name: "states", id: crypto.randomUUID()}

function App() {
  const [list, setList] = useState([])
  const [completed, setCompleted] = useState([])
  

  function getNewTask(task){
    setList((prevList)=>([...prevList, task]))
  }

  function removeTask(task){
    const newList = list.filter((listItem)=> listItem.id !== task.id)
    setList(()=> newList)
  }

  function completeTask(task){
    setCompleted((prevCList)=>([...prevCList, task]))
    const newList = list.filter((listItem)=> listItem.id !== task.id)
    setList(()=> newList)
  }

  function removeCompleteTask(CTask){
    const newCList = completed.filter((CListItems)=> CListItems.id !== CTask.id)
    setCompleted(()=> newCList)
  }

  return (
    <>
      <div className={appStyle.main}>
          <Header></Header>

          <div className={appStyle.contents}>
              <TodoList List={list} remove={removeTask} complete={completeTask}></TodoList>
              <div className={appStyle['Contents-Div2']}>
                  <Adder getTask={getNewTask}></Adder>
                  <Completed completedList={completed} remove={removeCompleteTask}></Completed>
              </div>
          </div>

          <div className={appStyle.footer}>
             <Footer></Footer>
          </div>
      </div>
    </>
  )
}

export default App
