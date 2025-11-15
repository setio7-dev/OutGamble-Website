import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Chatbot from "../pages/Chatbot"
import Community from "../pages/Community"

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/chatbot" element={<Chatbot/>}/>
            <Route path="/community" element={<Community/>}/>
        </Routes>
    </BrowserRouter>
  )
}
