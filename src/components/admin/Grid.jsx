import React from 'react'
import StatCards from './StatCards'
import ActivityGraph from './ActivityGraph'
import { UsageRadar } from './UsageRadar'
import { RecentBookings } from './RecentBookings'

const Grid = () => {
  return (
    <div className='px-4 grid gap-3 grid-cols-12'>
        <StatCards/>
        <ActivityGraph/>
        <UsageRadar/>
        <RecentBookings/>
    </div>
  )
}

export default Grid