import React from 'react'
import Header from '../../others/Header'
import CreateTask from '../../others/CreateTask'
import AllTask from '../../others/AllTask'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full py-[2%] px-[8%]'>
        <Header/>
        <CreateTask /> 
        <div id="AllTaskScroll" className="flex flex-col gap-4 h-[210px] overflow-auto ">
            <AllTask />
            <AllTask />
            <AllTask />
            <AllTask />

        </div> 
    </div>

  )
}

export default AdminDashboard