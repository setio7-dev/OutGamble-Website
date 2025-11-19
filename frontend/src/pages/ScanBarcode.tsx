import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AOS from 'aos';
import ScanBarcodeContent from "../components/scan/ScanBarcodeContent";
import { UseSplashHookContext } from "../context/UseSplashContext";
import { UseAuthHookContext } from "../context/UseAuthContext";
import MobileNavbar from "../components/MobileNavbar";
import ScrollToTop from "../utils/ScrollToTop";

export default function ScanBarcode() {
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
      <ScanBarcodeContent />
      <Footer />
    </div>
  )
}
