import React, { useEffect, useState } from 'react'

const TaskListNumber = ({data}) => {

    const [newtask, setnewtask] = useState(0)
    const [active, setactive] = useState(0)
    const [failed, setfailed] = useState(0)
    const [completed, setcompleted] = useState(0)

    useEffect(() => {
      const arr = data.tasks
      const newTaskCount = arr.filter((t) => t.new_task === true).length;
    const activeCount = arr.filter((t) => t.active === true).length;
    const failedCount = arr.filter((t) => t.failed === true).length;
    const completedCount = arr.filter((t) => t.completed === true).length;

    // Update state with calculated values
    setnewtask(newTaskCount);
    setactive(activeCount);
    setfailed(failedCount);
    setcompleted(completedCount);
    },[data])
    


  return (
    <div className='w-[100%] mt-10 flex justify-between'>
        <div className='w-[20%] px-10 py-8 bg-[#88f9bb] rounded-3xl'>
            <div className='text-[70px]'>{newtask}</div>
            <div className='text-3xl mt-7'>New Task</div>
        </div>
        <div className='w-[20%]  px-10 py-8 bg-[#88f9bb] rounded-3xl'>
            <div className='text-[70px]'>{completed}</div>
            <div className='text-3xl mt-7'>Completed</div>
        </div>
        <div className='w-[20%]  px-10 py-8 bg-[#88f9bb] rounded-3xl'>
            <div className='text-[70px]'>{active}</div>
            <div className='text-3xl mt-7'>Accepted</div>
        </div>
        <div className='w-[20%]  px-10 py-8 bg-[#88f9bb] rounded-3xl'>
            <div className='text-[70px]'>{failed}</div>
            <div className='text-3xl mt-7'>Failed</div>
        </div>
    </div>
  )
}

export default TaskListNumber