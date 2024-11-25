import React from 'react'
import {FiCalendar} from "react-icons/fi"

const TopBar = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' }); // Get the month name
    const year = date.getFullYear();
    const dayOfWeek = date.toLocaleString('default', { weekday: 'long' }); // Get the day of the week
    const today = `${dayOfWeek}, ${month} ${day}, ${year}`;
  return (
    <div className='border-b mb-4 mt-2 px-4 pb-2 border-stone-2'>
        <div className='flex justify-between items-center p-0.5'>
            <div>
                <span className='text-sm font-bold block'>Good morning, Osaro</span>
                <span className='text-xs text-stone-500 block'>{today}</span>
            </div>
            <button className='flex items-center gap-2 text-sm bg-stone-100 px-3 py-1.5 rounded transition-colors hover:text-stone-50 hover:bg-stone-950'>
                <FiCalendar/>
                <span>Prev 6 Months</span>
            </button>
        </div>
    </div>
  )
}

export default TopBar