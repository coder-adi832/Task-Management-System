import React from 'react'

const Header = ({data}) => {
  const logout = () => {
    localStorage.clear()
    window.location.reload()
  }
  return (
    <div className='flex justify-between m-2'>
        <div>
            <span className='text-2xl'>Hello!!!</span> <br /> 
            <span className='text-3xl'>
                {data.name} 👋
            </span>
        </div>
        <div>
            <button onClick={logout} className='bg-[#42dac4] text-2xl w-[140px] h-[50px] font-semibold rounded-full'> LOG OUT</button>
        </div>
    </div>
  )
}

export default Header