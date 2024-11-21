import React, { useEffect } from 'react'
import { BiBook, BiChart, BiHome } from 'react-icons/bi'
import { MdCleaningServices, MdLocalLaundryService, MdReport, MdRoomService } from 'react-icons/md'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const AdminSidebar = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate("/admin/cleaners")
  },[])
  return (
    <div className='overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]'>
      <Link to={"/"} className='font-semibold text-[1rem]'>CleanSwift</Link>
      <div className='flex flex-col gap-8 mt-16 text-[.9rem]'>
            <NavLink to={"/admin/cleaners"} className={"flex gap-2 items-center"}>
                <MdCleaningServices />
                Cleaners
            </NavLink>
            <NavLink to={"/admin/bookings"} className={"flex gap-2 items-center"}>
                <BiBook/>
                Bookings
            </NavLink>
            <NavLink to={"/admin/services"} className={"flex gap-2 items-center"}>
                <MdLocalLaundryService/>
                Services
            </NavLink>
            <NavLink to={"/admin/reports"} className={"flex gap-2 items-center"}>
                <BiChart/>
                Reports
            </NavLink>
        </div>
    </div>
  )
}

export default AdminSidebar