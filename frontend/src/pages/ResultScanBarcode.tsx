import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ResultScanBarcodeContent from "../components/scan/ResultScanBarcodeContent";
import AOS from "aos";

export default function ResultScanBarcode() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar/>
      <ResultScanBarcodeContent/>
      <Footer/>
    </div>
  )
}
