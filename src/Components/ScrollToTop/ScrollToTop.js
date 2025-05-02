import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn lên đầu trang khi thay đổi route
  }, [location]);

  return null; // Không cần render gì
};

export default ScrollToTop;
