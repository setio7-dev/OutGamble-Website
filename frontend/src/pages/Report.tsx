import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AOS from "aos"
import { useEffect } from 'react'
import ReportContent from '../components/report/ReportContent';
import { UseSplashHookContext } from '../context/UseSplashContext';
import { UseAuthHookContext } from '../context/UseAuthContext';
import MobileNavbar from '../components/MobileNavbar';
import ScrollToTop from '../utils/ScrollToTop';

export default function Report() {
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
      <ScrollToTop/>
      {isMobile ? <MobileNavbar/> : <Navbar />}
      <ReportContent />
      <Footer />
    </div>
  )
}
