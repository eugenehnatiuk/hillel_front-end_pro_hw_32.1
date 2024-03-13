import './animatedText.scss';
import React, { useState, useEffect, useRef } from 'react';

const AnimatedText = ({ text }) => {
  const [currentLetter, setCurrentChar] = useState('');
  const [showFullText, setShowFullText] = useState(false);

  const currentIndex = useRef(0);

  setTimeout(() => {
    if (currentIndex.current < text.length) {
      setCurrentChar(text.charAt(currentIndex.current));
      currentIndex.current++;
    } else {
      setCurrentChar('');
      setShowFullText(true);
    }
  }, 70);

  return (
    <div className="text-block">
      <p>{currentLetter.toUpperCase()}</p>
      {showFullText && <p>{text.toUpperCase()}</p>}
    </div>
  );
};

export default AnimatedText;
