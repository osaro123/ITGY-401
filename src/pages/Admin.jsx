import React from 'react'
import AdminSidebar from '../components/admin/AdminSidebar'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <div className='bg-stone-50 text-stone-950 grid grid-cols-[220px,_1fr] gap-4 p-4'>
        <AdminSidebar/>
        <Outlet/>
    </div>
  )
}

export default Admin