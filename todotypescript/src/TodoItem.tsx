import { todoType } from './appTypes'

type PropsType={
    task:todoType
    deleteTask(nameToDelete:string):void
}

function TodoItem({task,deleteTask}:PropsType) {
  return (
    <div className='taskItems'>
        <p>{task.taskName}</p>
        <p>{task.workDay}</p>
        <button className='taskButton' onClick={() =>{deleteTask(task.taskName)}}>Delete</button>
    </div>
  )
}

export default TodoItem