'use client'
import React from 'react'
import { useAppContext } from '../../Context'
import Navbar from '../Navbar'

const Contact = () => {
    const { toggleDarkMode ,isdarkmode }=useAppContext()
 
  return (
    <>
     <Navbar />
     <div className="div" style={{display:'flex',alignItems:"center",justifyContent:"center"}}>
     <h2 style={{color:isdarkmode ?"red":"green"}}>hello from Contact page</h2>

   </div>
 
  
    
    </>
  )
}

export default Contact