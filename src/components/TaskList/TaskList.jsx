import React from 'react'

const TaskList = (props) => {
  return (
    <div className='w-[460px] h-full rounded-3xl flex-shrink-0 bg-[#42dac4] p-10'>
        <div className='flex justify-between'>
            <h3 className='bg-red-500 text-xl w-16 text-center rounded-lg'>HIGH</h3>
            <h3>{props.date}</h3>
        </div>
        <h1 className='mt-5 text-3xl'>{props.title}</h1>
        <p className='mt-2 '>{props.Description}</p>
    </div>
  )
}

export default TaskList