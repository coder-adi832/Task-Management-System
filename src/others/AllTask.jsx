import React, { useEffect, useState } from 'react'

const AllTask = (props) => {
  const [newtask, setnewtask] = useState(0)
  const [failed, setfailed] = useState(0)
  const [completed, setcompleted] = useState(0)
  const [active, setactive] = useState(0)

  useEffect(() => {
      const tasks = props.data.tasks
      const totalactive = tasks.filter((t)=> t.active === true).length
      const totalNewTask = tasks.filter((t)=> t.new_task === true).length
      const totalCompleted = tasks.filter((t) => t.completed === true).length
      const totalFailed = tasks.filter((t) => t.failed === true).length
      setactive(totalactive)
      setcompleted(totalCompleted)
      setfailed(totalFailed)
      setnewtask(totalNewTask)
  }, [])
  
  return (
    <>

    <div className='h-[80px] bg-emerald-300 w-full text-xl items-center rounded-full flex-shrink-0 grid grid-cols-6 '>
        <div className='mx-auto'>
          {props.sno + 1}
        </div>
        <div className='mx-auto'>
            {props.data.name}
        </div>
        <div className='mx-auto'>
            {active}
        </div>
        <div className='mx-auto'>
            {newtask}
        </div>
        <div className='mx-auto'>
            {completed}
        </div>
        <div className='mx-auto'>
            {failed}
        </div>
    </div>
    </>
  )
}

export default AllTask