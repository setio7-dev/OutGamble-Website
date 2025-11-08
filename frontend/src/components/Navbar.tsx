import logo from "/image/logo/logo.png"
import { UseSplashHook } from "../context/UseSplashContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const { isStart } = UseSplashHook();
    const navigate = useNavigate();
  return (
    <div className="flex justify-center w-full fixed z-50">
        <div className="w-full transition-all duration-700 flex justify-center mt-4 overflow-x-hidden rounded-full border-white border-2" style={{ width: `${isStart ? '1120px' : '240px'}` }}>
            <div className="bg-black w-280 flex items-center h-[12vh] justify-between px-14">
              <p className="font-poppins-light transition-all duration-700 text-white text-[16px] cursor-pointer hover:text-primary" style={{ opacity: `${isStart ? 100 : 0}` }}>Tentang Kami</p>
              <p className="font-poppins-light transition-all duration-700 text-white text-[16px] cursor-pointer hover:text-primary" style={{ opacity: `${isStart ? 100 : 0}` }}>Layanan Kami</p>
              <div className="flex justify-center items-center gap-4 cursor-pointer" onClick={() => navigate("/")}>
                <img src={logo} className="w-10 h-auto" alt="" />
                <h1 className="text-white font-poppins-semibold text-[16px]">OutGamble</h1>
              </div>
              <p className="font-poppins-light transition-all duration-700 text-white text-[16px] cursor-pointer hover:text-primary" style={{ opacity: `${isStart ? 100 : 0}` }}>Testimoni</p>
              <p className="font-poppins-light transition-all duration-700 text-white text-[16px] cursor-pointer hover:text-primary" style={{ opacity: `${isStart ? 100 : 0}` }}>Komunitas Kami</p>
            </div>
        </div>
    </div>
  )
}
