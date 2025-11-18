import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CommunityContent from '../components/community/CommunityContent'
import AOS from 'aos';
import { useEffect } from 'react';
import { UseSplashHookContext } from '../context/UseSplashContext';

export default function Community() {
  const { setIsStart } = UseSplashHookContext();

  useEffect(() => {
    setIsStart(true)
  }, [setIsStart]);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar/>
      <CommunityContent/>
      <Footer/>
    </div>
  )
}
