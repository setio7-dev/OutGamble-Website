import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AOS from "aos"
import { useEffect } from 'react'
import ReportContent from '../components/report/ReportContent';

export default function Report() {
    useEffect(() => {
        AOS.init();
    }, []);
  return (
    <div>
      <Navbar/>
      <ReportContent/>
      <Footer/>
    </div>
  )
}
