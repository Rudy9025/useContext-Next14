'use client'
import React from 'react'
import Navbar from '../Navbar'
import { useAppContext } from '@/app/Context'
 
const Admin = () => {
  const {isdarkmode} =useAppContext()
   return (
   <>
   <Navbar />

  <div className="div" style={{display:'flex',alignItems:"center",justifyContent:"center"}}>
   <h2 style={{backgroundColor:isdarkmode?"red":"blue"}}> from admin page</h2>
   </div>
   </>
  )
}

export default Admin