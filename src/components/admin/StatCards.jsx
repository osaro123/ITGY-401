import React from 'react'
import { FiTrendingDown, FiTrendingUp } from 'react-icons/fi'

const StatCards = () => {
  return (
    <>
        <Card
        title="Revenue"
        value="₦12,000,000"
        pillText="12% increase"
        trend="up"
        period="Last 30 days"
      />
      <Card
        title="Expenses"
        value="₦8,500"
        pillText="5% decrease"
        trend="down"
        period="Last 30 days"
      />
      <Card
        title="Net Profit"
        value="₦3,500"
        pillText="7% increase"
        trend="up"
        period="Last 30 days"
      />
    </>
  )
}

export default StatCards

const Card = ({
        title,
        value,
        pillText,
        trend,
        period
    }) => {
    return (
        <div className='p-4 border-stone-300 border rounded col-span-4'>
            <div className='flex items-start justify-between mb-8'>
                <div>
                    <h3 className='text-stone-500 mb-2 text-sm'>{title}</h3>
                    <p className='text-3xl font-semibold'>{value}</p>
                </div>
                <span className={`text-xs flex items-center gap-1 font-medium px-2 py-1 rounded ${trend === "up" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {trend === "up" ? <FiTrendingUp/> : <FiTrendingDown/>}
                    {pillText}
                </span>
            </div>
            <p className='text-stone-500 text-xs'>{period}</p>
        </div>
    )
}