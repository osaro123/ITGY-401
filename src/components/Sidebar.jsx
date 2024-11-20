import React, { useEffect } from 'react'
import { BiBook, BiHome } from 'react-icons/bi'
import { MdCleaningServices } from 'react-icons/md'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate("/dashboard/services")
    },[])
  return (
    <div className='overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]'>
        <Link to={"/"} className='font-semibold text-[1rem]'>CleanSwift</Link>
        <div className='flex flex-col gap-8 mt-16 text-[.9rem]'>
            <NavLink to={"/dashboard/services"} className={"flex gap-2 items-center"}>
                <MdCleaningServices />
                Services
            </NavLink>
            <NavLink to={"/dashboard/booking"} className={"flex gap-2 items-center"}>
                <BiBook/>
                Booking
            </NavLink>
            <NavLink to={"/dashboard/staff-allocation"} className={"flex gap-2 items-center"}>
                <BiHome/>
                Staff allocation
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar