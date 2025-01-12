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
    const loggedInUser = localStorage.getItem('loggedInUser'); 
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      console.log(userData)
      setuser(userData.role);
      setLoggedInUserData(userData.data);
      console.log(LoggedInUserData)
    }
  }, []);
  
  const handleLogin = (email,password) => {

    if(authData){
      const isadmin = authData.admins.find((e) => e.email == email && e.password == password)
      const isemployee = authData.employees.find((e) => e.email == email && e.password == password)
      if(isadmin){
        console.log("THIS IS ADMIN")
        localStorage.setItem('loggedInUser',JSON.stringify({role : 'admin', data : isadmin}))
        window.location.reload()
      }
      else if(isemployee){
        console.log("THIS IS EMPLOYEE")
        localStorage.setItem('loggedInUser',JSON.stringify({role : 'employee', data : isemployee}))
        window.location.reload()
      }
      else{
        alert("INVALID CREDENTIALS")
      }
      
    }
    else{
      alert("INVALID CREDENTIALS")
    }
  }

  return (
    <>

    {!user ? <Login handleLogin = {handleLogin}/> : ''}
    {user == 'admin' ? <AdminDashboard  data = {LoggedInUserData}/> : ''}
    {user == 'employee' ?  <EmployeeDashboard data = {LoggedInUserData}/> : ''}
    </>
  )
}

export default App