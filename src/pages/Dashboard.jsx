import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='grid grid-cols-[220px,_1fr] gap-4 p-4 bg-stone-50 text-stone-950'>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Dashboard