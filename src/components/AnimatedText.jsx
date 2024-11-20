import React from 'react';
import { motion } from 'framer-motion';
import { heroText } from '../utils/anim';

const AnimatedText = ({ children }) => {
  // Convert children to a string safely
  const text = typeof children === 'string' ? children : String(children);

  return (
    <div>
      {text.split(' ').map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            variants={heroText}
            className="inline-block"
            initial="initial"
            whileInView="animate"
            custom={i}
          >
            {word + '\u00a0'}
          </motion.span>
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
