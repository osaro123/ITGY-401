import React from 'react'
import AnimatedText from '../AnimatedText'
import Card from '../Card';

const pricingPlans = [
  {
    title: "Basic Cleaning",
    price: "₦50,000 / Session",
    features: [
      "Regular maintenance cleaning",
      "Dusting, vacuuming, mopping",
      "Trash removal",
    ],
    color: {
      primaryColor: "#f5e9e7", // Soft peach
      textColor: "#5a2e2a",    // Deep brown
    },
  },
  {
    title: "Deep Cleaning",
    price: "₦12,0000 / Session",
    features: [
      "Comprehensive cleaning",
      "Scrubbing and tough stain removal",
      "Appliance cleaning",
    ],
    color: {
      primaryColor: "#e8e0ff", // Soft lavender
      textColor: "#483d8b",    // Deep purple
    },
  },
  {
    title: "Move-In/Move-Out Cleaning",
    price: "₦150,000 / Session",
    features: [
      "Ideal for transitions",
      "Deep cleaning of empty spaces",
      "Sanitizing and detailed scrubbing",
    ],
    color: {
      primaryColor: "#e5e6f7", // Light periwinkle
      textColor: "#2c2d55",    // Navy blue
    },
  },
  {
    title: "Office Cleaning",
    price: "Custom Quote",
    features: [
      "Tailored for workspaces",
      "Regular maintenance or deep cleaning",
      "Flexible scheduling to fit your office hours",
    ],
    color: {
      primaryColor: "#f2f7e9", // Light sage
      textColor: "#3e5231",    // Olive green
    },
  },
  {
    title: "Specialized Cleaning",
    price: "Custom Quote",
    features: [
      "Carpet and upholstery cleaning",
      "Eco-friendly options available",
      "Tailored services for unique needs",
    ],
    color: {
      primaryColor: "#f6f2e2", // Light cream
      textColor: "#594830",    // Warm brown
    },
  },
];

  
  

const Pricing = () => {
  return (
    <section id='pricing' className='sm:mx-16 mx-8 py-[72px] mt-4'>
        <h3 className='text-[3.157rem] font-medium mb-2 tracking-tighter max-w-xl leading-none'>
            <AnimatedText>Affordable Cleaning Packages for Every Budget</AnimatedText>
        </h3>
        <div className="grid gap-4 mt-8 grid-cols-1">
            {pricingPlans.map((plan, index) => (
              <Card plan={plan} index={index}/>
            ))}
        </div>
    </section>
  )
}

export default Pricing