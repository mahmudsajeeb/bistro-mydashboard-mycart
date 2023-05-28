import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { Navigate } from 'react-router-dom'

function PrivateRoute({children}) {
  const {user,loading} = useContext(AuthContext)
  
  if(loading){
    return <progress className="progress w-56"></progress>

  }
  if(user){
    return children
  }
  return  <Navigate to='/login' state={{from:location}} replace></Navigate>
}

export default PrivateRoute