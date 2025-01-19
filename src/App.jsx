import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage.jsx'
import { AuthContext } from './context/AuthProvider.jsx'
const App = () => {

  const authData = useContext(AuthContext)
  const [user, setuser] = useState(null)
  const [LoggedInUserData, setLoggedInUserData] = useState(null)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser') 
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setuser(userData.role);
      setLoggedInUserData(userData.data)
    }
  }, []);
  
  const handleLogin = (email,password) => {
    const isadmin = authData.admins.find((e)=> email == e.email && password == e.password)
    const isemployee = authData.employees.find((e)=> email == e.email && password == e.password)
    if(authData && isadmin){
      setuser('admin')
      setLoggedInUserData(isadmin)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data : isadmin}))

    }
    else if( authData && isemployee) {
        setuser('employee')
        setLoggedInUserData(isemployee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: isemployee}))
    }
    else{
      alert("INVALID CREDENTIALS")
    }
  }

  return (
    <>

    {!user ? <Login handleLogin = {handleLogin}/> : ''}
    {user == 'admin' ? <AdminDashboard data = {LoggedInUserData} changeUser = {setuser} /> : (user == 'employee' ? <EmployeeDashboard  data = {LoggedInUserData} changeUser = {setuser}/> : '' )}

    </>
  )
}

export default App