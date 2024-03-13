import './animatedText.scss';
import React, { useState, useEffect, useRef } from 'react';
import Loading from '../Loading/Loading.jsx';

const AnimatedText = ({ text }) => {
  const [currentChar, setCurrentChar] = useState('');
  const [showFullText, setShowFullText] = useState(false);
  const [showLoader, setshowLoader] = useState(true);

  const index = useRef(0);

  useEffect(() => {
    setTimeout(() => {
      setshowLoader(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (!showLoader) {
      const interval = setInterval(() => {
        if (index.current < text.length) {
          setCurrentChar(text.charAt(index.current));
          index.current++;
        } else {
          clearInterval(interval);
          setCurrentChar('');
          setShowFullText(true);
        }
      }, 100);
    }
  }, [showLoader]);

  return (
    <div className="text-block">
      {showLoader && <Loading />}
      <p>{currentChar}</p>
      {showFullText && <p>{text}</p>}
    </div>
  );
};

export default AnimatedText;