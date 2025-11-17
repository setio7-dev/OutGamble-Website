import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AOS from 'aos';
import ScanBarcodeContent from "../components/scan/scanBarcodeContent";

export default function ScanBarcode() {
    useEffect(() => {
        AOS.init();
    }, []);

  return (
    <div>
      <Navbar/>
      <ScanBarcodeContent/>
      <Footer/>
    </div>
  )
}
