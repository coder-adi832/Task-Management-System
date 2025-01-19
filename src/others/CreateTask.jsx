import React, { useState } from 'react'

const CreateTask = ({updateData}) => {
    const [taskTitle, settaskTitle] = useState('')
    const [taskDate, settaskDate] = useState('')
    const [assign, setassign] = useState('')
    const [category, setcategory] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const submithandler = (e) =>{
        e.preventDefault()
        
        updateData(taskTitle,taskDate,assign,category,taskDescription)

        setassign('')
        setTaskDescription('')
        setcategory('')
        settaskDate('')
        settaskTitle('')
    }
  return (
    <form onSubmit={(e) => submithandler(e)} className=' flex justify-between  p-12 h-[525px] text-lg'>
        <div className='flex justify-between flex-col min-w-96 bg-red-400 p-6 rounded-2xl'>
            <label className='flex flex-col'>
                Task Title
                <input
                value={taskTitle}
                onChange={(e) => {
                    settaskTitle(e.target.value)
                }}
                required type="text" className='mt-2 h-12 p-2 focus:outline-none rounded-md'/>
            </label>
            <label className='flex flex-col'>
                Date
                <input 
                value={taskDate}
                onChange={(e)=>{
                    settaskDate(e.target.value)
                }}
                required type="date" className='mt-2 h-12 p-2 text-l focus:outline-none rounded-md placeholder: text-slate-400'/>
            </label>
            <label className='flex flex-col'>
                Assign To
                <input 
                value={assign}
                onChange={(e) => {
                    setassign(e.target.value)
                }}
                required type="text" className='mt-2 h-12 p-2 focus:outline-none rounded-md' placeholder='Name of Employee' />
            </label>
            <label  className='flex flex-col'>
                Category
                <input
                value={category}
                onChange={(e) =>{
                    setcategory(e.target.value)
                }}
                required type="text"  className='mt-2 h-12 p-2 focus:outline-none rounded-md' placeholder='Finance, Logistics, etc.,'/>
            </label>
            
        </div>
        <div className=' min-w-[450px] bg-red-400 p-6 rounded-2xl resize'>
        <label className='flex flex-col'>
                Description
                <textarea
                value={taskDescription}
                onChange={(e)=>{
                    setTaskDescription(e.target.value)
                }}
                className='mt-2 h-[150px] p-2 focus:outline-none rounded-md resize-none'>
                </textarea>
        </label>
        <button type='submit' className='bg-[#42dac4] text-xl w-[140px] h-[50px] font-semibold rounded-full mt-8 float-right'> Create Task</button>

        </div>
    </form>
  )
}

export default CreateTask