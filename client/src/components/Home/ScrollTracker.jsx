
import { useEffect, useState } from 'react';

export const useScrollTracker = () => {
    const[isEndScroll,setIsEndScroll]= useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

      if (scrollTop + clientHeight === scrollHeight) {
        setIsEndScroll(true)

      }else{
        setIsEndScroll(false)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return isEndScroll;
};

