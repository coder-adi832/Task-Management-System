import React from 'react'

const NewTask = (props) => {
  return (
    <div className='w-[460px] h-full rounded-3xl flex-shrink-0 bg-yellow-300 p-10 relative'>
        <div className='flex justify-between'>
            <h3 className='bg-red-300 text-xl w-16 text-center rounded-lg'>HIGH</h3>
            <h3>{props.date}</h3>
        </div>
        <h1 className='mt-5 text-3xl'>{props.title}</h1>
        <p className='mt-2 '>{props.Discription}</p>
        <h3 className='mt-3 text-xl'>{props.category}</h3>
        <div className='w-full flex justify-around absolute bottom-6 left-0'>
            <button className='h-[50px] text-2xl bg-emerald-300 w-[50%] rounded-full'>Accept Task</button>
        </div>
    </div>
  )
}

export default NewTask