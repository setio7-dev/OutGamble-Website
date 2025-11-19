import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CommunityContent from '../components/community/CommunityContent'
import AOS from 'aos';
import { useEffect } from 'react';
import { UseSplashHookContext } from '../context/UseSplashContext';
import { UseAuthHookContext } from '../context/UseAuthContext';
import MobileNavbar from '../components/MobileNavbar';

export default function Community() {
  const { setIsStart } = UseSplashHookContext();
  const { isMobile } = UseAuthHookContext();

  useEffect(() => {
    setIsStart(true)
  }, [setIsStart]);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      {isMobile ? <MobileNavbar/> : <Navbar/>}
      <CommunityContent/>
      <Footer/>
    </div>
  )
}
