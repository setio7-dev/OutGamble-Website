import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AOS from 'aos';
import ScanBarcodeContent from "../components/scan/ScanBarcodeContent";
import { UseSplashHookContext } from "../context/UseSplashContext";

export default function ScanBarcode() {
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
      <ScanBarcodeContent />
      <Footer />
    </div>
  )
}
