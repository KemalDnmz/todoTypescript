import { useState,FC, ChangeEvent} from 'react'
import './App.css'
import {todoType} from "./appTypes"
import TodoItem from './TodoItem'

const App:FC=() => {


  const [task, setTask] = useState<string>("")
  const [workDay, setWorkDay] = useState<number>(0)
  const [todoList, setTodoList] = useState<todoType[]>([])

  console.log(todoList);


  const handleChange = (event:ChangeEvent<HTMLInputElement>) =>{
    if(event.target.name === "task") {
      setTask(event.target.value)
    }else{
      setWorkDay(Number(event.target.value))
    }
  }

  const addNewTask = ():void =>{
    const newTask={
      taskName:task,
      workDay:workDay
    }
    setTodoList([...todoList,newTask])
    setTask("")
    setWorkDay(0)
    
  }

  const deleteTask=(nameToDelete:string):void =>{
    setTodoList(todoList.filter((task) => {
      return task.taskName !==nameToDelete
    }))
    
  }

  return (
    <>  
      <div className='inputContainer'>
        <input className='inputDiv' type="text" value={task} name='task' placeholder='Type Your Task' onChange={handleChange} />
        <input className='inputDiv' type="number" value={workDay} name='workDay' placeholder='Number of Tasks'  onChange={handleChange} />
        <button className='buttonDiv' onClick={addNewTask}>Add New Task</button>
      </div>
  
      <div className='taskContainer'>
        {todoList.map((task:todoType,index:number) => {
            return <TodoItem key={index} task={task} deleteTask={deleteTask}/>
          })}
      </div>
    </>
  
  )
}

export default App
