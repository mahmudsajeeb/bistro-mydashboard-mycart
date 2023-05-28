import React, { createContext, updateProfile,useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app);

function AuthProvider({children}) {
  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(true)

  const signIn = (email,password)=>{
    setLoading(true)
     return signInWithEmailAndPassword(auth, email, password);
  }
  const createUser =(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
  }
  const updateProfile =(name,photo)=>{
   return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
  }

  useEffect(()=>{
     
    const unsubscribe = onAuthStateChanged(auth,createUser =>{
      setUser(createUser)
      setLoading(false)
    })
    return (()=>{
      
      return unsubscribe()
    })
  },[])
  const authInfo ={
    user,
    loading,
    createUser,
    signIn,
    updateProfile,
    logOut
  }
  return (
    <AuthContext.Provider value={authInfo}>
    {
      children
    }
    </AuthContext.Provider>
  )
}

export default AuthProvider