import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AOS from "aos"
import { useEffect } from 'react'
import ReportContent from '../components/report/ReportContent';
import { UseSplashHookContext } from '../context/UseSplashContext';

export default function Report() {
  const { setIsStart } = UseSplashHookContext();

  useEffect(() => {
    setIsStart(true)
  }, [setIsStart]);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar />
      <ReportContent />
      <Footer />
    </div>
  )
}
