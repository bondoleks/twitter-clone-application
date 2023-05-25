
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { END_SCROLL_HOME } from '../../redux/actions';

const ScrollTracker = () => {
    
    const dispatch =useDispatch();    

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

      if (scrollTop + clientHeight === scrollHeight) {
        dispatch({ type: END_SCROLL_HOME });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default ScrollTracker;