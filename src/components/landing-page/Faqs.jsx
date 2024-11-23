import React, { useState } from 'react';
import AnimatedText from '../AnimatedText';
import { BiPlus, BiMinus } from 'react-icons/bi';

const faqs = [
  {
    question: "What services does CleanSwift offer?",
    answer: "CleanSwift provides a variety of cleaning services including Basic Cleaning, Deep Cleaning, Move-In/Move-Out Cleaning, Office Cleaning, Event Cleanup, and Specialized Cleaning tailored to your unique needs."
  },
  {
    question: "How can I book a cleaning service?",
    answer: "You can book a cleaning service directly through our website or by contacting our customer support team. Select your desired package, schedule a time, and leave the rest to us!"
  },
  {
    question: "Are your cleaning services eco-friendly?",
    answer: "Yes, CleanSwift offers eco-friendly cleaning options using environmentally safe products to ensure the safety of your family, pets, and the planet."
  },
  {
    question: "Do I need to provide cleaning supplies?",
    answer: "No, our professional cleaners come equipped with all the necessary supplies and tools. However, if you prefer we use your specific products, we are happy to accommodate."
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='sm:mx-16 mx-8 py-[72px] grid sm:grid-cols-2 grid-cols-1 place-content-center'>
      <div>
        <h3 className='text-[3.157rem] font-medium tracking-tighter max-w-md leading-none mb-4'>
          <AnimatedText>Frequently Asked Questions</AnimatedText>
        </h3>
        <p className='opacity-60 max-w-sm'>
          <AnimatedText>Everything You Need to Know About Our Services.</AnimatedText>
        </p>
      </div>
      <div>
        {faqs.map(({ question, answer }, index) => (
          <div key={index} className='py-6 border-b last:border-none'>
            {/* Question Header */}
            <div
              className='mb-2 flex items-center gap-4 cursor-pointer'
              onClick={() => toggleFaq(index)}
            >
              {openIndex === index ? (
                <BiMinus size={20} className="text-gray-700" />
              ) : (
                <BiPlus size={20} className="text-gray-700" />
              )}
              <h4 className='text-[1.333rem] font-medium'>{question}</h4>
            </div>
            {/* Answer */}
            {openIndex === index && (
              <p className='opacity-60 mt-2 transition-all duration-300 ease-in-out'>
                {answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
