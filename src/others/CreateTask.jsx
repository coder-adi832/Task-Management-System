import React from 'react'

const CreateTask = () => {
  return (
    <div className=' flex justify-around  p-8 h-[600px]'>
        <form className='flex justify-between flex-col min-w-96 bg-red-400 p-6 rounded-2xl'>
            <label className='flex flex-col'>
                Task Title
                <input required type="text" className='mt-2 h-8 p-2 focus:outline-none rounded-md'/>
            </label>

            <label className='flex flex-col'>
                Description
                <textarea className='mt-2 h-[70px] p-2 focus:outline-none rounded-md'>

                </textarea>
            </label>
            <label className='flex flex-col'>
                Date
                <input required type="date" className='mt-2 h-8 p-2 focus:outline-none rounded-md'/>
            </label>
            <label className='flex flex-col'>
                Assign To
                <input required type="text" className='mt-2 h-8 p-2 focus:outline-none rounded-md' />
            </label>
            <label  className='flex flex-col'>
                Category
                <input  required type="text"  className='mt-2 h-8 p-2 focus:outline-none rounded-md'/>
            </label>
            <button type='submit' className='bg-emerald-300 w-28 mx-auto h-10 rounded-full text-xl mt-4'> Submit</button>
        </form>
    </div>
  )
}

export default CreateTask