import React, { useEffect, useState } from 'react'
import Header from '../../others/Header.jsx'
import TaskListNumber from '../../others/TaskListNumber.jsx'
import TaskList from '../TaskList/TaskList.jsx'


const EmployeeDashboard = ({data}) => {
  
  return (
    <div className='h-screen w-full px-[8%] py-[2%] bg-[#c2f9ff]'>
        <Header data = {data}/>
        <TaskListNumber data = {data} />
        <div id="taskContainer" className='h-[400px] w-full mt-10 flex p-6 gap-8 flex-nowrap flex-shrink-0 overflow-auto'>
            {data.tasks.map(function(f,idx){
              return <TaskList key ={idx} title = {f.taskTitle} Description = {f.taskDescription} date = {f.taskDate} category = {f.taskCategory}/>
            })}
        </div>
    </div>
  )
}

export default EmployeeDashboard