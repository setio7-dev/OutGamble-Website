import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Chatbot from "../pages/Chatbot"
import Community from "../pages/Community"
import ScanBarcode from "../pages/ScanBarcode"
import ResultScanBarcode from "../pages/ResultScanBarcode"
import Report from "../pages/Report"

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/chatbot" element={<Chatbot/>}/>
            <Route path="/community" element={<Community/>}/>
            <Route path="/scan-qr" element={<ScanBarcode/>}/>
            <Route path="/result-scan-qr" element={<ResultScanBarcode/>}/>
            <Route path="/report" element={<Report/>}/>
        </Routes>
    </BrowserRouter>
  )
}
