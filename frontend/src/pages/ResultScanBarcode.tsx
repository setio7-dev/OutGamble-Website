import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ResultScanBarcodeContent from "../components/scan/ResultScanBarcodeContent";
import AOS from "aos";
import { UseSplashHookContext } from "../context/UseSplashContext";

export default function ResultScanBarcode() {
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
      <ResultScanBarcodeContent />
      <Footer />
    </div>
  )
}
