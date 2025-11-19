import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ResultScanBarcodeContent from "../components/scan/ResultScanBarcodeContent";
import AOS from "aos";
import { UseSplashHookContext } from "../context/UseSplashContext";
import { UseAuthHookContext } from "../context/UseAuthContext";
import MobileNavbar from "../components/MobileNavbar";
import ScrollToTop from "../utils/ScrollToTop";

export default function ResultScanBarcode() {
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
      <ResultScanBarcodeContent />
      <Footer />
    </div>
  )
}
