import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Chatbot from "../pages/Chatbot"

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/chatbot" element={<Chatbot/>}/>
        </Routes>
    </BrowserRouter>
  )
}
