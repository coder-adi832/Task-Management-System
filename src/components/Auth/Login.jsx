import React, { useState } from 'react'
import img1 from '../../assets/browser1768684.png'
import img2 from '../../assets/email2669570.png'

const Login = ({handleLogin}) => {


    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const submithandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
    }

    
  return (
    <>
    <div className='h-screen w-full bg-gradient-to-br from-[#0BD1DA] via-[#717AE8] to-[#F10DFB]' >
    </div>
    <div className='absolute border-2 p-8 min-h-[471px] min-w-[376px] inset-y-1/4 left-[40%] rounded-3xl backdrop-blur-3xl text-white' >
        <h1 className='text-center text-[250%] font-bold'>Login</h1>
        <form onSubmit={(e) =>{
            submithandler(e)
        }}>
        <div className='flex border-2 mt-8 rounded-3xl p-2'>
            <input 
            value={email}
            onChange={(e) =>{
                setemail(e.target.value)
            }}
            type="email" placeholder='Email' required className='p-2 w-full bg-transparent focus:outline-none placeholder:text-white'/>
            <img src={img2} className='h-8'/>
        </div>
        <div className='flex border-2 mt-8 rounded-3xl p-2'>
            <input 
            value={password}
            onChange={(e) =>{
                setpassword(e.target.value)
            }}
            type="password" placeholder='Password' required className='p-2 w-full bg-transparent text-white focus:outline-none placeholder:text-white'/>
            <img src={img1}  className='h-8'/>
        </div>
        <div className='flex justify-between mt-8 rounded-2xl'>
            <label className='flex gap-2'>
            <input type="checkbox"  className='border-none'/><p>Remember me</p>
            </label>
            <a href="">Forget Password</a>
        </div>
        <div className='flex justify-around mt-8'>
        <button type='submit' className='border-2 w-full text-2xl rounded-3xl p-3'>Login</button>
        </div>
        </form>
    </div>
    </>
  )
}

export default Login