import React, { useContext, useState } from 'react'
import Header from '../../others/Header'
import CreateTask from '../../others/CreateTask'
import AllTask from '../../others/AllTask'
import { AuthContext } from '../../context/AuthProvider'

const AdminDashboard = (props) => {
  const employeeData = useContext(AuthContext).employees
  // const [items, setItems] = useState(null)
  // "active": true,
  //           "completed": false,
  //           "new_task": false,
  //           "failed": false,
  //           "taskTitle": "Supplier Meeting",
  //           "taskDescription": "Meet with suppliers to discuss upcoming orders.",
  //           "taskDate": "2025-01-15",
  //           "taskCategory": "Logistics"
  const updateData = (taskTitle,taskDate,assign,category,taskDiscription) =>{
    employeeData.map(function(elem){
      if(elem.name == assign){
        const newitem = {active: false,
          completed: false,
          new_task: true,
          failed: false,
          taskTitle: taskTitle,
          taskDescription: taskDiscription,
          taskDate: taskDate,
          taskCategory: category,
        }
        setItems((previtems) => [...previtems,newitem])
      }
    })
  }
  return (
    <>
    <div className='h-screen w-full py-[2%] px-[8%]'>
        <Header data = {props.data} changeUser = {props.changeUser}/>
        <CreateTask updateData = {updateData} /> 
        <div className='h-[80px] bg-emerald-300 w-full text-xl items-center rounded-full flex-shrink-0 mb-4 grid grid-cols-6 '>
        <span className=' mx-auto'>
          S.No.
        </span>
        <span className=' mx-auto'>
            Name
        </span>
        <span className='mx-auto'>
            Accepted
        </span>
        <span className=' mx-auto'>
            New Task
        </span>
        <span className=' mx-auto'>
            Completed Task
        </span>
        <span className=' mx-auto'>
            Failed Task
        </span>
    </div>
        <div id="AllTaskScroll" className="flex flex-col gap-4 h-[280px] overflow-auto ">
            {employeeData.map(function(elem,idx){
              return <AllTask key = {idx} sno = {idx} data = {elem}/>
            })}

        </div> 
    </div>
  </>
  )
}

export default AdminDashboard