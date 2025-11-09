import { useEffect, useState } from 'react'

export default function UseScrollAnimation() {
  const [visitor, setVisitor] = useState<number>(0);
    const [campanye, setCampanye] = useState<number>(0);
    const [article, setArticle] = useState<number>(0);
    const [user, setUser] = useState<number>(0);
    const [scrollY, setScrollY] = useState<number>(0);
    const [isStartScroll, setIsStartScroll] = useState<boolean>(false);
  
    useEffect(() => {
      const handleScrollDetection = () => {
        setScrollY(window.scrollY);  
        if (scrollY >= 300) {
          setIsStartScroll(true);
        }
      }
  
      window.addEventListener("scroll", handleScrollDetection);
      handleScrollDetection();
    }, [scrollY, isStartScroll]);
  
    useEffect(() => {
      const handleScrollAnimation = () => {
        if (isStartScroll) {
          let campanyeCount = 0;
          let visitorCount = 0;
          let articleCount = 0;
          let userCount = 0;
  
          const visitorInterval = setInterval(() => {
            if (visitorCount < 10000) {
              visitorCount++;
              setVisitor(visitorCount);
            } else {
              clearInterval(visitorInterval);
            }
          }, 0.2);
  
          const campanyeInterval = setInterval(() => {
            if (campanyeCount < 5) {
              campanyeCount++;
              setCampanye(campanyeCount);
            } else {
              clearInterval(campanyeInterval);
            }
          }, 300);
  
          const articleInterval = setInterval(() => {
            if (articleCount < 300) {
              articleCount++;
              setArticle(articleCount);
            } else {
              clearInterval(articleInterval);
            }
          }, 10);
  
          const userInterval = setInterval(() => {
            if (userCount < 99) {
              userCount++;
              setUser(userCount);
            } else {
              clearInterval(userInterval);
            }
          }, 10);
        }
      }
  
      handleScrollAnimation();
    }, [isStartScroll]);

    return { visitor, campanye, article, user }
}
