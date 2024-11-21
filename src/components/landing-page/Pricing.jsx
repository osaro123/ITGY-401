import React from 'react'
import AnimatedText from '../AnimatedText'

const pricingPlans = [
    {
      title: "Basic Cleaning",
      price: "$50 / Session",
      features: [
        "Regular maintenance cleaning",
        "Dusting, vacuuming, mopping",
        "Trash removal"
      ]
    },
    {
      title: "Deep Cleaning",
      price: "$120 / Session",
      features: [
        "Comprehensive cleaning",
        "Scrubbing and tough stain removal",
        "Appliance cleaning"
      ]
    },
    {
      title: "Move-In/Move-Out Cleaning",
      price: "$150 / Session",
      features: [
        "Ideal for transitions",
        "Deep cleaning of empty spaces",
        "Sanitizing and detailed scrubbing"
      ]
    },
    {
      title: "Office Cleaning",
      price: "Custom Quote",
      features: [
        "Tailored for workspaces",
        "Regular maintenance or deep cleaning",
        "Flexible scheduling to fit your office hours"
      ]
    },
    {
      title: "Event Cleanup",
      price: "$80+ / Event",
      features: [
        "Post-event tidying",
        "Trash collection and floor cleaning",
        "Restoring order after events"
      ]
    },
    {
      title: "Specialized Cleaning",
      price: "Custom Quote",
      features: [
        "Carpet and upholstery cleaning",
        "Eco-friendly options available",
        "Tailored services for unique needs"
      ]
    }
  ];
  
  

const Pricing = () => {
  return (
    <div className='sm:mx-16 mx-8 py-[72px]'>
        <h3 className='text-[3.157rem] font-medium mb-2 tracking-tighter max-w-xl leading-tight'>
            <AnimatedText>Affordable Cleaning Packages for Every Budget</AnimatedText>
        </h3>
        <div className="grid gap-4 mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
            <div key={index} className={`border px-8 py-16 rounded ${index == 1 || index == 2 || index == 5 ? "sm:col-span-2" : ""}`}>
                <h4 className="text-md opacity-60 pb-2">{plan.title}</h4>
                <p className="text-2xl font-bold">{plan.price}</p>
                <ul className="mt-4 list-disc list-inside">
                {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                ))}
                </ul>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Pricing