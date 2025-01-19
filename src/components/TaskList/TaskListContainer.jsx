import React from 'react'
import NewTask from './NewTask'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
const TaskListContainer = (props) => {
  return (
        <>
        {props.data.tasks.map(function(f,idx){
              if(f.new_task === true){
                return <NewTask date = {f.taskDate} title = {f.taskTitle} Discription = {f.taskDescription} category = {f.taskCategory}/>
              }
              else if(f.active === true){
                return <AcceptTask date = {f.taskDate} title = {f.taskTitle} Description = {f.taskDescription} category = {f.taskCategory}/>
              }
              else if(f.failed === true){
                return <FailedTask date = {f.taskDate} title = {f.taskTitle} Description = {f.taskDescription} category = {f.taskCategory}/>
              }
              else if(f.completed === true){
                return <CompleteTask date = {f.taskDate} title = {f.taskTitle} Description = {f.taskDescription} category = {f.taskCategory}/>
              }
            })}    
            </>    
  )
}

export default TaskListContainer