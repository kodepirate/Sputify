import React from 'react'
import { Route, Routes } from 'react-router-dom'
<<<<<<< HEAD
import DisplayHome from './DisplayHome'

const Display = () => {
  return (
    <div className='w-[100%] m-2 px-6 pt-4 rounded  bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path='/' element={<DisplayHome/>} />
        </Routes>
=======
import Displayhome from './Displayhome'

const Display = () => {
  return (
    <div className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0 '>
      <Routes>
        <Route path='/' element={<Displayhome />} />
      </Routes>
>>>>>>> 12b7c70adca6dc55ace970fc159bf65192f1b36a
    </div>
  )
}

export default Display
