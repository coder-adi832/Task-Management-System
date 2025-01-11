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

  // useEffect(() => {
    
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       const userdata = JSON.parse(loggedInUser)
  //       setuser(userdata.role)

  //     }
  //   }
  // }, [authData]);
  
  const handleLogin = (email,password) => {

  const isadmin = authData.admins.find((e) => e.email == email && e.password == password);
  const isemployee = authData.employees.find((e) => e.email == email && e.password == password);

    if(isadmin){
      console.log("THIS IS ADMIN")
      setuser("admin")
      // localStorage.setItem('loggedInUser',JSON.stringify({role : 'admin'}))
    }
    else if(isemployee){
      console.log("THIS IS Employee")
      setuser("employee")
      setLoggedInUserData(isemployee)
      // localStorage.setItem('loggedInUser',JSON.stringify({role : 'employee'}))
    }
    else{
      alert("INVALID CREDENTIALS")
    }
  }

  return (
    <>

    {!user ? <Login handleLogin = {handleLogin}/> : ''}
    {user == 'admin' ? <AdminDashboard /> : ''}
    {user == 'employee' ?  <EmployeeDashboard data = {LoggedInUserData}/> : ''}
    </>
  )
}

export default App