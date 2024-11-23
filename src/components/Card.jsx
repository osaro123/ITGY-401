import React from 'react'

const Card = ({plan,index}) => {
  return (
    <div 
        className='sticky top-0'
        style={{top:`calc(-5vh + ${index * 25}px)`}}
    >
        <div 
            key={index} 
            className={`border px-8 py-16 rounded ${index === 0 ? "mt-16" : "mt-8"}`}
            style={{
                backgroundColor: plan.color.primaryColor,
                color: plan.color.textColor,
            }}
        >
            <h4 className="text-md opacity-60 pb-2">{plan.title}</h4>
            <p className="text-3xl font-bold">{plan.price}</p>
            <ul className="mt-4 list-disc list-inside">
            {plan.features.map((feature, i) => (
                <li key={i} className='pb-2'>{feature}</li>
            ))}
            </ul>
        </div>
    </div>
  )
}

export default Card