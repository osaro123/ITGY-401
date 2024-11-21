import React from 'react';
import AnimatedText from '../AnimatedText';

const Services = () => {
  const cleaningServices = [
    {
      title: "Basic Cleaning",
      description: "Efficient cleaning services for daily upkeep.",
      features: [
        "Dusting and vacuuming",
        "Mopping floors",
        "Cleaning surfaces",
        "Emptying trash"
      ],
    },
    {
      title: "Deep Cleaning",
      description: "Thorough cleaning for a fresh and hygienic space.",
      features: [
        "Detailed scrubbing of bathrooms and kitchens",
        "Cleaning behind appliances",
        "Washing baseboards, windows, and doors",
        "Removing tough stains"
      ],
    },
    {
      title: "Move-In/Move-Out Cleaning",
      description: "Get a spotless space when moving in or out.",
      features: [
        "Deep cleaning of empty spaces",
        "Sanitizing bathrooms and kitchens",
        "Vacuuming and mopping all floors",
        "Trash removal and dusting"
      ],
    },
    {
      title: "Office Cleaning",
      description: "Keep your workspace clean and productive.",
      features: [
        "Dusting desks and equipment",
        "Emptying bins and restocking supplies",
        "Sanitizing high-touch areas",
        "Vacuuming carpets and cleaning floors"
      ],
    },
  ];

  return (
    <div className='sm:mx-16 mx-8 py-[72px]'>
      <h3 className='text-[3.157rem] font-medium tracking-tighter'>
        <AnimatedText>Our Cleaning Services</AnimatedText>
      </h3>
      <p className='opacity-60 max-w-sm'>
        <AnimatedText>Choose from a variety of tailored cleaning packages designed to meet your needs.</AnimatedText>
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
        {cleaningServices.map((service, index) => (
          <div key={index} className={`px-8 py-16 border rounded-md ${index === 3 || index === 0 ? "sm:col-span-2" : ""}`}>
            <h4 className='text-2xl font-semibold'>{service.title}</h4>
            <p className='mt-2 opacity-70'>{service.description}</p>
            <ul className='mt-4 list-disc pl-4'>
              {service.features.map((feature, i) => (
                <li key={i} className='opacity-80'>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
